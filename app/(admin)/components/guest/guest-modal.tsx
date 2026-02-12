"use client";
import Button from "@/app/component/button";
import Modal from "../../ui/modal";
import { useEffect, useState } from "react";
import useGuest from "@/app/hooks/use-guest";
import { toast, ToastContainer } from "react-toastify";

type TGuestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};
const GuestModal = ({ isOpen, onClose, onSuccess }: TGuestModalProps) => {
  const [formValues, setFormValues] = useState<{
    id: number;
    name: string;
    address: string;
    email: string;
    dateOfBirth: string;
  }>({
    id: 0,
    name: "",
    address: "",
    email: "",
    dateOfBirth: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clearFormValues = () => {
    setFormValues({
      id: 0,
      name: "",
      address: "",
      email: "",
      dateOfBirth: "",
    });
  };
  const { useCreateGuest } = useGuest({
    onSuc: onSuccess,
    onClose,
    onClear: clearFormValues,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(formValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    useCreateGuest.mutate({
      id: formValues.id.toString(),
      name: formValues.name,
      address: formValues.address,
      email: formValues.email,
      dateOfBirth: formValues.dateOfBirth,
    });
    setIsSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guest Modal">
      <ToastContainer position="top-right" />
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        <div className="admin-input">
          <label htmlFor="id">Guest ID Number</label>
          <input
            type="number"
            name="id"
            id="id"
            required
            value={formValues.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formValues.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={formValues.address}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formValues.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            required
            value={formValues.dateOfBirth}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-64" disabled={isSubmitting}>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GuestModal;
