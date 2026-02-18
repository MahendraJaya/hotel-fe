export interface IGuest {
  id: string;
  name: string;
  address: string;
  email: string;
  dateOfBirth: string;
}

export interface IRoom {
  id: number;
  name: string;
  maxCapacity:number;
  description: string | null;
  roomtype: IRoomType;
  availability: boolean;
  price: number;
  floor: number;
  roomNumber: string;
}

export interface IBooking {
  id: string;
  guest: IGuest;
  checkInDate: string;
  checkOutDate: string;
  bookingDate: string;
  status : "cancel" | "pending" | "waiting" | "checkin" | "checkout";
  totalGuest: number;
  totalDay: number;
  room: IRoom;
}

export interface ICreateBookingPayload {
  id: string;
  guestId: string;
  checkInDate: string;
  checkOutDate: string;
  bookingDate: string;
  status : string;
  totalGuest: number;
  totalDay: number;
  roomId: string;
}
export interface IRoomType {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  meta?: {total: number, page: number, limit: number, totalPages: number};
}

export interface IToken {
  token:string;
}
