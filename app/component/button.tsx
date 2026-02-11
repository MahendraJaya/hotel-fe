type TButtonProp = {
  variant?: "primary" | "danger" | "success";
  size?: "lg" | "sm";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...props
}: TButtonProp) => {
  const tVariant = {
    primary: "bg-primary text-white",
    danger: "bg-primary/20 text-[#E33D3D]",
    success: "bg-[#50C252] text-white",
  };

  const tSize = {
    lg: "py-2.5 px-9",
    sm: "py-[10px] px-7",
  };
  return (
    <button
      className={`rounded-lg inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105 ${tVariant[variant]} ${tSize[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
