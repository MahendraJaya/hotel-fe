import { getGuest } from "@/app/services/guest.service";
import Table from "../../ui/table";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse, IGuest } from "@/app/types";

type TGuestTableProps = {
  guests: ApiResponse<IGuest[]> | undefined;
  isLoading: boolean;
}
const GuestTable = ({guests, isLoading} : TGuestTableProps) => {

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className="border-b border-gray-200 p-4">Id Number</th>
            <th className="border-b border-gray-200 p-4">Name</th>
            <th className="border-b border-gray-200 p-4">Address</th>
            <th className="border-b border-gray-200 p-4">Email</th>
            <th className="border-b border-gray-200 p-4">Date Of Birth</th>
            <th className="border-b border-gray-200 p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {guests?.data?.map((guest) => {
            return (
              <tr key={guest.id}>
                <td className="border-b border-gray-200 p-4">{guest.id}</td>
                <td className="border-b border-gray-200 p-4">{guest.name}</td>
                <td className="border-b border-gray-200 p-4">{guest.address}</td>
                <td className="border-b border-gray-200 p-4">{guest.email}</td>
                <td className="border-b border-gray-200 p-4">{new Date(guest.dateOfBirth).toDateString()}</td>
                <td className="border-b border-gray-200 p-4">Action</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default GuestTable;
