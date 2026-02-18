"use client";
import { IRoom } from "@/app/types";
import Modal from "../../ui/modal";
import RoomSelect from "./room-select";
import React, { useState } from "react";
import { SingleValue } from "react-select";
import Button from "@/app/component/button";
import useBooking from "@/app/hooks/use-booking";
type TRoomBookingModal = {
  isOpen: boolean;
  onClose: () => void;
  roomId: IRoom | null;
  startdate: string | "";
  enddate: string | "";
};
const RoomBookingModal = ({
  isOpen,
  onClose,
  roomId,
  startdate,
  enddate,
}: TRoomBookingModal) => {
  const [formValues, setFormValues] = useState<{
    id: string;
    guestId: string;
    roomId: string;
    checkInDate: string;
    checkOutDate: string;
    bookingDate: string;
    totalGuest: number;
    totalDay: number;
    status: string;
  }>({
    id: "",
    guestId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    bookingDate: "",
    totalGuest: 0,
    totalDay: 0,
    status: "pending",
  });
const clearFormValues = () => {
    setFormValues({
      id: "",
      guestId: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
      bookingDate: "",
      totalGuest: 0,
      totalDay: 0,
      status: "pending",
    });
  };
  const {createBookings} = useBooking({onSuc : clearFormValues});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSelect = (e: SingleValue<{ value: string; label: string }>) => {
    if (e) {
      setFormValues((prevValues) => ({ ...prevValues, guestId: e.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const resolvedStart = startdate || new Date(Date.now()).toISOString();
  const resolvedEnd = enddate || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  const startDate = new Date(resolvedStart);
  const endDate = new Date(resolvedEnd);
  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const updatedValues = {
    ...formValues,
    id: `BHS-${Date.now()}`,
    roomId: roomId?.id.toString() || "",
    checkInDate: resolvedStart,
    checkOutDate: resolvedEnd,
    bookingDate: new Date(Date.now()).toISOString(),
    totalDay: diffInDays,
  };

  setFormValues(updatedValues); // update state for UI if needed
  console.log(updatedValues);
  createBookings.mutate(updatedValues); 
};
  

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Room Booking | ${roomId?.name}`}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="admin-input">
          <label htmlFor="guestId">Guest</label>
          <RoomSelect onChange={handleSelect} />
        </div>
        {/* <div className="admin-input">
        <label htmlFor="checkInDate">Check in Date</label>
        <input type="date" name="checkInDate" id="checkInDate" onChange={(e) => handleChange(e)}/>
      </div>
      <div className="admin-input">
        <label htmlFor="checkOutDate">Check Out Date</label>
        <input type="date" name="checkOutDate" id="checkOutDate" onChange={(e) => handleChange(e)}/>
      </div> */}
        <div className="admin-input">
          <label htmlFor="totalGuest">Total Guest</label>
          <input
            type="number"
            name="totalGuest"
            id="totalGuest"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default RoomBookingModal;
