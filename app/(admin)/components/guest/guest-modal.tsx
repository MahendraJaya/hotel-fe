"use client";
import Button from "@/app/component/button";
import Modal from "../../ui/modal";
import { useEffect, useState } from "react";

type TGuestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const GuestModal = ({ isOpen, onClose }: TGuestModalProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guest Modal">
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
