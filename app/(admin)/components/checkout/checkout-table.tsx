import { ApiResponse, IBooking } from "@/app/types";
import Table from "../../ui/table";
import Button from "@/app/component/button";
import { PiFileMagnifyingGlass } from "react-icons/pi";

type TCheckoutTableProps = {
  bookings: ApiResponse<IBooking[]> | undefined;
  onOpen: (booking: IBooking) => void;
};
const CheckoutTable = ({ bookings, onOpen }: TCheckoutTableProps) => {
  return (
    <div>
      <Table>
        <thead className="text-center">
          <tr key={"checkin-table-head"}>
            <th className="border-b border-gray-200 p-4">Booking Number</th>
            <th className="border-b border-gray-200 p-4">Guest Number</th>
            <th className="border-b border-gray-200 p-4">Status</th>
            <th className="border-b border-gray-200 p-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {bookings?.data?.map((booking) => {
            return (
              <tr key={booking.id}>
                <td className="border-b border-gray-200 p-4">{booking.id}</td>
                <td className="border-b border-gray-200 p-4">
                  {booking.guest.id} ({booking.guest.name})
                </td>
                <td className="border-b border-gray-200 p-4">
                  {booking.status}
                </td>
                <td className="border-b border-gray-200 p-4">
                  <Button onClick={() => onOpen(booking)}>
                    <PiFileMagnifyingGlass /> Detail
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckoutTable;
