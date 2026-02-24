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
import useModal from "@/app/hooks/use-modal";

const GuestManagement = () => {
  //STATE
  const {isOpen, selectedData, onClose, onOpen, onOpenEdit} = useModal<IGuest>({data: null})
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["guests", searchParams.get("page")],
    queryFn: () => getGuest(currentPage),
  });

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Guest Management" subtitle="Manage all guest data">
        <Button onClick={onOpen}>
          <FaPlus /> Add New Guest
        </Button>
      </Header>
      <GuestTable guests={data} isLoading={isLoading} onOpenEditModal={onOpenEdit} />
      <GuestModal
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={refetch}
        guest={selectedData}
      />
      <Pagination totalPages={data?.meta?.totalPages || 1} />
    </div>
  );
};

export default GuestManagement;
