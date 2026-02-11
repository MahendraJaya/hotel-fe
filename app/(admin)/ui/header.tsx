type THeaderProp = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};
const Header = ({ title, subtitle, children }: THeaderProp) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="font-bold text-2xl">{title}</div>
        <div className="font-normal text-md">{subtitle}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
