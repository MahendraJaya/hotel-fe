"use client";
import Button from "@/app/component/button";
import Header from "../../ui/header";
import { FaPlus } from "react-icons/fa6";
import GuestTable from "../../components/guest/guest-table";
import GuestModal from "../../components/guest/guest-modal";
import { useState } from "react";

const GuestManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Guest Management" subtitle="Manage all guest data">
        <Button onClick={handleOpenModal}>
          <FaPlus /> Add New Guest
        </Button>
      </Header>
      <GuestTable />
      <GuestModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default GuestManagement;
