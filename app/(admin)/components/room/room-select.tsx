"use client"
import { getAllGuest } from "@/app/services/guest.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select, { SingleValue } from "react-select";
type TRoomSelectProps = {
    onChange: (e: SingleValue<{ value: string; label: string }>) => void
}
const RoomSelect = ({onChange} : TRoomSelectProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["allGuest"],
    queryFn: () => getAllGuest(),
  });
  const options: { value: string; label: string }[] = [];
  data?.data?.map((guest) =>
    options.push({ value: guest.id, label: guest.name + ` (${guest.id})` }),
  );
  if (isLoading) return <div></div>;
  return <Select isSearchable options={options} isLoading={isLoading} name="guestId" onChange={(e) => onChange(e)} />;
};

export default RoomSelect;
