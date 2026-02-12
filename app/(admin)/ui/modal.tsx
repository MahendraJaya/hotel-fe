type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: TModalProps) => {
  if (!isOpen) return;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition duration-300">
      <div
        className="min-h-screen min-w-screen bg-black/20 -z-10 absolute transition duration-300"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className="w-full max-w-2xl bg-white text-black rounded-lg ">
        <h1 className="font-bold text-2xl border-b border-gray-200 pb-2 w-full py-4 px-4">
          {title}
        </h1>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
