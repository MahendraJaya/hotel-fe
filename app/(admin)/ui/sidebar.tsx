"use client";
import Image from "next/image";
import { useState } from "react";
import { FaDoorClosed, FaDoorOpen, FaPerson } from "react-icons/fa6";

const menu = [
  {
    name: "Guest",
    icon: <FaPerson size={24} />,
  },
  {
    name: "CheckIn",
    icon: <FaDoorOpen size={24} />,
  },
  {
    name: "CheckOut",
    icon: <FaDoorClosed size={24} />,
  },
];

const Sidebar = () => {
  const [curPage, setCurPage] = useState("Guest");
  const handleChangePage = (page: string) => {
    setCurPage(page);
  };
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
              className={`cursor-pointer w-full h-12 ${item.name == curPage ? "bg-primary/10 text-primary" : "text-black hover:bg-primary/10 transition duration-200 hover:text-primary"} font-medium rounded-md px-3 py-2  flex gap-2 items-center`}
              key={index}
              onClick={() => handleChangePage(item.name)}
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
