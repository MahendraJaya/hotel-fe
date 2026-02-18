"use client";
import { ToastContainer } from "react-toastify";
import Modal from "../../ui/modal";
import React, { useState } from "react";
import Button from "@/app/component/button";
import { ApiResponse, IRoomType } from "@/app/types";

type TRoomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roomType: ApiResponse<IRoomType[]> | undefined;
  onSearch: (params: Record<string, string>) => void;
};

const RoomModal = ({
  isOpen,
  onClose,
  roomType,
  onSearch,
}: TRoomModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchValue, setSearchValue] = useState({
    startdate: "",
    enddate: "",
    roomtype: "",
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSearch(searchValue);
    const startDate = new Date(searchValue.startdate);
    const endDate = new Date(searchValue.enddate);

    // Get difference in milliseconds
    const diffInMs = endDate.getTime() - startDate.getTime();

    // Convert to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    alert(diffInDays);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSearchValue((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(searchValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search Room Data">
      <ToastContainer position="top-right" />
      <form onSubmit={(e) => handleSearch(e)} className="w-full flex flex-col">
        <div className="admin-input w-full">
          <label htmlFor="name">Name</label>
          <select name="name" id="name" onChange={(e) => handleChange(e)}>
            <option value="">Select Room Type</option>
            {roomType?.data?.map((roomType: IRoomType) => (
              <option key={roomType.id} value={roomType.id}>
                {roomType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="admin-input w-full">
          <label htmlFor="startdate">Check in Date</label>
          <input
            type="date"
            name="startdate"
            id="startdate"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="admin-input w-full">
          <label htmlFor="enddate">Check out Date</label>
          <input
            type="date"
            name="enddate"
            id="enddate"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-64" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Search"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RoomModal;
