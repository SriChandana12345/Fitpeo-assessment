import userProfile from "../assets/images/userProfile.svg";
import React from "react";
import { Search, MailCheck, Settings, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-n1 py-4 flex items-center justify-between w-full px-4 sticky top-0 z-10">
      <div className="w-[8rem]  md:w-[15rem] flex px-2 py-1 rounded-md border-1 border-[#ffffff] items-center gap-2 bg-zinc-600">
        <Search color="#ffffff" size={16}/>
        <input
          placeholder="Search"
          className="flex-grow outline-none text-base text-white bg-transparent"
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-zinc-500 rounded-full p-2">
          <MailCheck size={20} color="#ffffff"/> 
        </span>
        <span className="bg-zinc-500 rounded-full p-2">
          <Settings size={20} color="#ffffff"/>
        </span>
        <div className="bg-zinc-500 rounded-full p-2 relative">
          <Bell size={20} color="#ffffff"/>
          <span className="bg-blue-400 w-2 h-2 rounded-full absolute top-[0.4rem] left-[1.2rem]"></span>
        </div>
        <img src={userProfile} className="rounded-full w-9 h-9" alt="img"/>
      </div>
    </div>
  );
};

export default Header;
