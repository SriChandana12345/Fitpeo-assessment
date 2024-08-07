import React from "react";
import { House, ChartColumnDecreasing, LogOut, Blinds, CalendarCheck, ReceiptText } from "lucide-react";

const SideBar = () => {
  return (
    <div className="bg-n1 pt-4 pb-12 h-full top-0 left-0 m-0 w-[4.5rem]">
      <div className="flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col items-center gap-8 justify-center w-full">

          <Blinds color="#161dd4" size={20}/>
          {/* <span className="w-full"> */}
          <House size={20} color="#161dd4" fill="#161dd4" className="mt-3"/>
          {/* </span> */}
          <CalendarCheck color="#696969" />
          <ReceiptText color="#696969" />

          <CalendarCheck color="#696969" />
        </div>
        <div>
          <LogOut size={20} color="#696969" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;