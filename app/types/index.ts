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
  room: IRoom;
}

export interface IRoomType {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export interface IToken {
  token:string;
}
