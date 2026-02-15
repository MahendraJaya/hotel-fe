import { ToastContainer } from "react-toastify";
import Modal from "../../ui/modal";
import Button from "@/app/component/button";
import { IBooking } from "@/app/types";

type TCheckinModalProps = {
  isOpen: boolean;
  onClose: () => void;
  booking: IBooking | null;
};
const CheckinModal = ({ isOpen, onClose, booking }: TCheckinModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guest Checkin Detail">
      <ToastContainer position="top-right" />
      <form className="w-full flex flex-col">
        <div className="admin-input">
          <label htmlFor="id">Checkin Number</label>
          <input type="text" name="id" id="id" readOnly value={booking?.id} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Guest Id Number</label>
          <input type="text" name="id" id="id" readOnly value={booking?.guest.id} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Check in Date</label>
          <input type="text" name="id" id="id" readOnly value={booking?.checkInDate} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Check out Date</label>
          <input type="text" name="id" id="id" readOnly value={booking?.checkOutDate} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Booking Date</label>
          <input type="text" name="id" id="id" readOnly value={booking?.bookingDate} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Status</label>
          <input type="text" name="id" id="id" readOnly value={booking?.status} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Total Guest</label>
          <input type="text" name="id" id="id" readOnly value={booking?.totalGuest} />
        </div>
        <div className="admin-input">
          <label htmlFor="id">Room</label>
          <input type="text" name="id" id="id" readOnly value={`${booking?.room.name} | ${booking?.room.roomNumber}`}  />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-64">
            CheckIn
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckinModal;
