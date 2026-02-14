"use client";
import { ToastContainer } from "react-toastify";
import Modal from "../../ui/modal";
import { useEffect, useState } from "react";
import Button from "@/app/component/button";
import { ApiResponse, IRoomType } from "@/app/types";

type TRoomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roomType: ApiResponse<IRoomType[]> | undefined;
  onSearch: (key: string, value: string) => void;
};

const RoomModal = ({
  isOpen,
  onClose,
  roomType,
  onSearch,
}: TRoomModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch("roomtype", selectedType);
  };
  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search Room Data">
      <ToastContainer position="top-right" />
      <form onSubmit={e => handleSearch(e)} className="w-full flex flex-col">
        <div className="admin-input w-full">
          <label htmlFor="name">Name</label>
          <select
            name="name"
            id="name"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Select Room Type</option>
            {roomType?.data?.map((roomType: IRoomType) => (
              <option key={roomType.id} value={roomType.id}>
                {roomType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-64" disabled={isSubmitting}>
            Search
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RoomModal;
