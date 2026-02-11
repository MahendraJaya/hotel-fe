type TTableProps = {
  children: React.ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement>;
const Table = ({ children, ...props }: TTableProps) => {
  return (
    <table
      className="text-left w-full border-collapse bg-white rounded-lg"
      {...props}
    >
      {children}
    </table>
  );
};

export default Table;
