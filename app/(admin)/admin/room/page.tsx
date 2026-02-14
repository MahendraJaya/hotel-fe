"use client";
import { getRoom } from "@/app/services/room.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "../../ui/header";
import Button from "@/app/component/button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import RoomTable from "../../components/room/room-table";
import RoomModal from "../../components/room/room-modal";
import { getRoomType } from "@/app/services/roomType.service";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const RoomManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(pathname, searchParams);

  const roomtype = searchParams.get('roomtype') || ''
  const { data:RoomData, isLoading:RoomLoading } = useQuery({
    queryKey: ["rooms", roomtype],
    queryFn: () => getRoom(roomtype),
  });

  const { data:RoomTypeData } = useQuery({
    queryKey: ["RoomTypeData"],
    queryFn: () => getRoomType(),
  });


  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

   const handleUpdateParams = (key:string, value:string) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    router.push(`${pathname}?${params.toString()}`)
    handleCloseModal();
  }

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Room Management" subtitle="Manage all room for guest">
        <Button onClick={handleOpenModal}>
          <FaMagnifyingGlass /> Search
        </Button>
      </Header>
      <RoomTable rooms={RoomData} isLoading={RoomLoading} />
      <RoomModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        roomType={RoomTypeData}
        onSearch={handleUpdateParams}
      />
    </div>
  );
};

export default RoomManagement;
