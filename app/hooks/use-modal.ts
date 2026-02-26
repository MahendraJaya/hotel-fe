"use client"
import { useState } from "react";

type TUseModalProps<T> = {
  data: T | null;
};
const useModal = <T>({ data }: TUseModalProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<T | null>(data);

  const onOpen = () => setIsOpen(true);
  const onOpenEdit = (dat: T) => {
    setSelectedData(dat);
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
    setSelectedData(null);
  };
  return { isOpen, onOpen, onClose, onOpenEdit, selectedData };
};

export default useModal;
