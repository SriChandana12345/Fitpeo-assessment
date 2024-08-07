import React from "react";
import { House, Triangle } from "lucide-react";

const Cards = ({className, color, rotate}) => {
  return (
    <div className="border-[2px] border-transparent rounded-[4px] w-full md:w-[9.7rem] p-3 bg-n1 h-[7.8rem]">
      <div className="bg-[rgba(87,114,176,0.4)] w-10 h-10 rounded-lg relative">

      <House size={24} color="#161dd4" fill="#161dd4" className="absolute top-[20%] left-[20%]"/>
      </div>
      <span className="text-xs">Total Orders</span>
      <div className="flex items-center justify-between mt-2">
        <span className="text-2xl font-bold">75</span>
        <div className="flex items-center justify-end gap-1">
          <Triangle color={color} fill={color} size={10} className={rotate}/>
          <span className={`text-xs ${className} font-bold`}>3%</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
