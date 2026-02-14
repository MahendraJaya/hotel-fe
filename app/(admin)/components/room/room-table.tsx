import { ApiResponse, IRoom } from "@/app/types";
import Table from "../../ui/table";

type TRoomTableProps = {
  rooms: ApiResponse<IRoom[]> | undefined;
  isLoading: boolean;
};
const RoomTable = ({ rooms, isLoading }: TRoomTableProps) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className="border-b border-gray-200 p-4">Name</th>
            <th className="border-b border-gray-200 p-4">Room Number</th>
            <th className="border-b border-gray-200 p-4">Max Capacity</th>
            <th className="border-b border-gray-200 p-4">Room Type</th>
            <th className="border-b border-gray-200 p-4">Availability</th>
            <th className="border-b border-gray-200 p-4">Price</th>
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
                <td className="border-b border-gray-200 p-4">
                  {room.availability ? "Available" : "Not Available"}
                </td>
                <td className="border-b border-gray-200 p-4">{room.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomTable;
