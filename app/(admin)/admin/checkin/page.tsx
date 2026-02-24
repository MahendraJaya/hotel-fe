"use client"
import Header from "../../ui/header";
import CheckinTable from "../../components/checkin/checkin-table";
import { useQuery } from "@tanstack/react-query";
import { getBookingCheckin } from "@/app/services/booking.service";
import CheckinModal from "../../components/checkin/checkin-modal";
import { IBooking } from "@/app/types";
import Button from "@/app/component/button";
import useModal from "@/app/hooks/use-modal";

const CheckinManagement = () => {
  const {isOpen, onClose, onOpenEdit, selectedData} = useModal<IBooking>({data : null});
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["checkin"],
    queryFn: getBookingCheckin,
  });
  
  const handleOnSuccess = async() => {
    onClose();
    refetch();
  }

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Checkin Management" subtitle="Manage guest room checkin">
        <Button onClick={handleOnSuccess}>Tes fetch</Button>
      </Header>
      <CheckinTable bookings={data} isLoading={isLoading} onOpen={onOpenEdit} />
      <CheckinModal isOpen={isOpen} onClose={onClose} booking={selectedData} onSuccess={handleOnSuccess}/>
    </div>
  );
};

export default CheckinManagement;
