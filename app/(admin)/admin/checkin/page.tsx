"use client"
import Header from "../../ui/header";
import CheckinTable from "../../components/checkin/checkin-table";
import { useQuery } from "@tanstack/react-query";
import { getBookingCheckin } from "@/app/services/booking.service";
import { useState } from "react";
import CheckinModal from "../../components/checkin/checkin-modal";
import { IBooking } from "@/app/types";
import Button from "@/app/component/button";

const CheckinManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCheckin, setSelectedCheckin] = useState<IBooking | null>(null);
  const handleOpenModal = (booking: IBooking) => {
    setSelectedCheckin(booking);
    setIsOpen(true)
  };
  const handleCloseModal = () => setIsOpen(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["checkin"],
    queryFn: getBookingCheckin,
  });

  const handleOnSuccess = async() => {
    handleCloseModal();
    refetch();
  }

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Checkin Management" subtitle="Manage guest room checkin">
        <Button onClick={handleOnSuccess}>Tes fetch</Button>
      </Header>
      <CheckinTable bookings={data} isLoading={isLoading} onOpen={handleOpenModal} />
      <CheckinModal isOpen={isOpen} onClose={handleCloseModal} booking={selectedCheckin} onSuccess={handleOnSuccess}/>
      {/* <GuestTable guests={data} isLoading={isLoading} onOpenEditModal={handleOpenEditModal} />
      <GuestModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSuccess={refetch}
        guest={selectedGuest}
      /> */}
    </div>
  );
};

export default CheckinManagement;
