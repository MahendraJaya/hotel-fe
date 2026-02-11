export interface IGuest {
  id: string;
  name: string;
  address: string;
  email: string;
  dateOfBirth: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
