"use client";
import Button from "@/app/component/button";
import Header from "../../ui/header";
import { FaPlus } from "react-icons/fa6";
import GuestTable from "../../components/guest/guest-table";
import GuestModal from "../../components/guest/guest-modal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGuest } from "@/app/services/guest.service";
import { IGuest } from "@/app/types";
import Pagination from "@/app/component/pagination";
import { useSearchParams } from "next/navigation";

const GuestManagement = () => {
  //STATE
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<IGuest | null>(null);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  //FN
  const handleCloseModal = () => {
    setSelectedGuest(null);
    setIsOpen(false);
  };
  const handleOpenModal = () => setIsOpen(true);
  const handleOpenEditModal = (guest: IGuest) => {
    setSelectedGuest(guest);
    setIsOpen(true);
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["guests", searchParams.get("page")],
    queryFn: () => getGuest(currentPage),
  });

  // useState(() => {
  //   refetch();
  // }, [currentPage])

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Guest Management" subtitle="Manage all guest data">
        <Button onClick={handleOpenModal}>
          <FaPlus /> Add New Guest
        </Button>
      </Header>
      <GuestTable guests={data} isLoading={isLoading} onOpenEditModal={handleOpenEditModal} />
      <GuestModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSuccess={refetch}
        guest={selectedGuest}
      />
      <Pagination totalPages={data?.meta?.totalPages || 1} />
    </div>
  );
};

export default GuestManagement;
