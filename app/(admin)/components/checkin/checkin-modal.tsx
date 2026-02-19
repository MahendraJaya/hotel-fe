import { ToastContainer } from "react-toastify";
import Modal from "../../ui/modal";
import Button from "@/app/component/button";
import { IBooking } from "@/app/types";
import useBooking from "@/app/hooks/use-booking";
import { useState } from "react";
import { cekMidtransStatus } from "@/app/services/booking.service";

type TCheckinModalProps = {
  isOpen: boolean;
  onClose: () => void;
  booking: IBooking | null;
};
const CheckinModal = ({ isOpen, onClose, booking }: TCheckinModalProps) => {
  const [status, setStatus] = useState("pay");
  const isNull = !!booking;
  const { updateBooking } = useBooking({});

  if (!isNull) return <></>;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(status);
    // updateBooking.mutate({
    //   id: booking.id.toString(),
    //   status: status.toString(),
    // });
    if(status === "pay"){

    }else if(status == "check"){
      const data = await cekMidtransStatus(booking.id.toString());
      window.open(data.data?.paymentUrl);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guest Checkin Detail">
      <ToastContainer position="top-right" />
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
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
          <Button
            type="submit"
            variant="danger"
            className="w-64"
            onClick={() => setStatus("cancel")}
          >
            Cancel Book
          </Button>

          {booking.payment == null && (
            <Button
              type="submit"
              className="w-64"
              onClick={() => setStatus("pay")}
            >
              Pay Checkin
            </Button>
          )}
          {booking.payment != null && (
            <Button
              type="submit"
              className="w-64"
              onClick={() => setStatus("check")}
            >
              Check Payment
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default CheckinModal;
