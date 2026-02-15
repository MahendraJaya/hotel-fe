"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBed, FaDoorClosed, FaDoorOpen, FaPerson } from "react-icons/fa6";

const menu = [
  {
    name: "Guest",
    at: "guest",
    icon: <FaPerson size={24} />,
  },
  {
    name: "Room",
    at: "room",
    icon: <FaBed size={24} />,
  },
  {
    name: "CheckIn",
    at: "checkin",
    icon: <FaDoorOpen size={24} />,
  },
  {
    name: "CheckOut",
    at: "checkout",
    icon: <FaDoorClosed size={24} />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [curPage, setCurPage] = useState(pathname.split("/")[2]);
  const nav = useRouter();
  const handleChangePage = (page: string) => {
    setCurPage(page);
    nav.push(page.toLowerCase());
  };
  useEffect(() => {
    console.log(curPage);
  }, [curPage]);
  return (
    <div className="w-[320px] min-h-screen border-r border-gray-200 flex flex-col items-center">
      <Image
        src={"/images/logo-admin.svg"}
        className="py-8.5 px-13 w-full border-b border-gray-200"
        alt="logo-admin"
        width={215}
        height={36}
      />
      <div className="mt-12 px-5.5 flex flex-col w-full gap-2.5">
        {menu.map((item, index) => {
          return (
            <div
              className={`cursor-pointer w-full h-12 ${item.at == curPage ? "bg-primary/10 text-primary" : "text-black hover:bg-primary/10 transition duration-200 hover:text-primary"} font-medium rounded-md px-3 py-2  flex gap-2 items-center`}
              key={index}
              onClick={() => handleChangePage(item.at)}
            >
              {item.icon} {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
