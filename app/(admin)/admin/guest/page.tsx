"use client";
import Button from "@/app/component/button";
import Header from "../../ui/header";
import { FaPlus } from "react-icons/fa6";
import GuestTable from "../../components/guest/guest-table";
import GuestModal from "../../components/guest/guest-modal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGuest } from "@/app/services/guest.service";

const GuestManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getGuest(),
  });

  
  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Guest Management" subtitle="Manage all guest data">
        <Button onClick={handleOpenModal}>
          <FaPlus /> Add New Guest
        </Button>
      </Header>
      <GuestTable guests={data} isLoading={isLoading} />
      <GuestModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSuccess={refetch}
      />
    </div>
  );
};

export default GuestManagement;
