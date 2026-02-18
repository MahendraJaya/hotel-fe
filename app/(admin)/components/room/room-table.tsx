import { ApiResponse, IRoom } from "@/app/types";
import Table from "../../ui/table";
import Button from "@/app/component/button";

type TRoomTableProps = {
  rooms: ApiResponse<IRoom[]> | undefined;
  isLoading: boolean;
  onOpenModalBooking: (room: IRoom) => void;
};
const RoomTable = ({ rooms, isLoading, onOpenModalBooking }: TRoomTableProps) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
       <div id="snap-container"></div>
      <Table>
        <thead>
          <tr>
            <th className="border-b border-gray-200 p-4">Name</th>
            <th className="border-b border-gray-200 p-4">Room Number</th>
            <th className="border-b border-gray-200 p-4">Max Capacity</th>
            <th className="border-b border-gray-200 p-4">Room Type</th>
            <th className="border-b border-gray-200 p-4">Price</th>
            <th className="border-b border-gray-200 p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms?.data?.map((room) => {
            return (
              <tr key={room.id}>
                <td className="border-b border-gray-200 p-4">{room.name}</td>
                <td className="border-b border-gray-200 p-4">
                  {room.roomNumber} | Floor : {room.floor}
                </td>
                <td className="border-b border-gray-200 p-4">
                  {room.maxCapacity}
                </td>
                <td className="border-b border-gray-200 p-4">
                  {room.roomtype.name}
                </td>
                <td className="border-b border-gray-200 p-4">{room.price}</td>
                <td className="border-b border-gray-200 p-4"><Button onClick={() => onOpenModalBooking(room)}>Book</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomTable;
