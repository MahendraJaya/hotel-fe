import Header from "../../ui/header";
import CheckoutTable from "../../components/checkout/checkout-table";
import { useQuery } from "@tanstack/react-query";
import { getBookingCheckOut } from "@/app/services/booking.service";
import useModal from "@/app/hooks/use-modal";
import { IBooking } from "@/app/types";
import CheckoutModal from "../../components/checkout/checkout-modal";

const CheckoutManagement = () => {
    const {isOpen, onOpenEdit, onClose, selectedData} = useModal<IBooking>({data : null});
    const { data, refetch } = useQuery({
    queryKey: ["checkout"],
    queryFn: getBookingCheckOut,
  });
  const handleSuccess = async() => {
    refetch();
    onClose();
  }
  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header
        title="Checkout Management"
        subtitle="Manage guest room checkout"
      ></Header>
      <CheckoutTable bookings={data} onOpen={onOpenEdit} />
      <CheckoutModal isOpen={isOpen} onClose={onClose} booking={selectedData} onSuccess={handleSuccess}/>
    </div>
  );
};

export default CheckoutManagement;
