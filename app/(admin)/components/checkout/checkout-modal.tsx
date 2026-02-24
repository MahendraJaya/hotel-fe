import { ToastContainer } from "react-toastify";
import Modal from "../../ui/modal";
import { IBooking } from "@/app/types";
import Button from "@/app/component/button";
import useBooking from "@/app/hooks/use-booking";
type TCheckoutModalProps = {
  booking: IBooking | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => Promise<void>;
};
const CheckoutModal = ({
  booking,
  isOpen,
  onClose,
  onSuccess,
}: TCheckoutModalProps) => {
  const isNull = !!booking;
  const {updateBooking} = useBooking({onSuc: onSuccess});
  if (!isNull) return <></>;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBooking.mutate({ id: booking.id, status: "checkout" });
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guest Checkin Detail">
      <ToastContainer position="top-right" />
      <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col">
        <div className="admin-input">
          <label htmlFor="id">Checkin Number</label>
          <input type="text" name="id" id="id" readOnly value={booking.id} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Room</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={`${booking.room.name} | ${booking.room.roomNumber}`}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Guest Id Number</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={`${booking.guest.id} (${booking.guest.name})`}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Check in Date</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={new Date(booking.checkInDate).toDateString()}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Check out Date</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={new Date(booking.checkOutDate).toDateString()}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Status</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={booking.status}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Total Guest</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={booking.totalGuest}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Total Payment</label>
          <input
            type="text"
            name="id"
            id="id"
            readOnly
            value={booking.room.price * booking.totalDay}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit">Check Out</Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckoutModal;
