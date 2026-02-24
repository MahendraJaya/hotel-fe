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
import RoomBookingModal from "../../components/room/room-booking-modal";
import { IRoom } from "@/app/types";
import useModal from "@/app/hooks/use-modal";

const RoomManagement = () => {
  const {isOpen, onClose, onOpen} = useModal<IRoom>({data: null});
  const {isOpen:isOpenBooking, onClose:onCloseBooking, onOpenEdit:onOpenBooking, selectedData:bookingData} = useModal<IRoom>({data: null});
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(pathname, searchParams);

  const roomtype = searchParams.get('roomtype') || ''
  const startdate = searchParams.get('startdate') || ''
  const enddate = searchParams.get('enddate') || ''

  const { data:RoomData, isLoading:RoomLoading } = useQuery({
    queryKey: ["rooms", roomtype, startdate, enddate],
    queryFn: () => getRoom(roomtype, startdate, enddate),
  });

  const { data:RoomTypeData } = useQuery({
    queryKey: ["RoomTypeData"],
    queryFn: () => getRoomType(),
  });

   const handleUpdateParams = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams)
    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, value)
    })
    router.push(`${pathname}?${newParams.toString()}`)
    onClose();
  }

  return (
    <div className="px-14 pt-13 space-y-4 relative">
      <Header title="Room Management" subtitle="Manage all room guest booking">
        <Button onClick={onOpen}>
          <FaMagnifyingGlass /> Search
        </Button>
      </Header>
      <RoomTable rooms={RoomData} isLoading={RoomLoading} onOpenModalBooking={onOpenBooking} />
      <RoomModal
        isOpen={isOpen}
        onClose={onClose}
        roomType={RoomTypeData}
        onSearch={handleUpdateParams}
      />
      <RoomBookingModal
        isOpen={isOpenBooking}
        onClose={onCloseBooking}
        roomId={bookingData}
        startdate={startdate}
        enddate={enddate}
      />

    </div>
  );
};

export default RoomManagement;
