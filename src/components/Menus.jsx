import React from "react";
import { LocateFixed, ChevronRight, Salad, CookingPot } from "lucide-react";

const Menus = () => {
  return (
    <div className="bg-n1 lg:h-[280px] p-4 flex flex-col gap-6 w-full rounded-[4px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <div className="bg-[rgba(232,103,103,0.5)] w-11 h-11 relative rounded-full">
            <LocateFixed
              color="#ff2600"
              className="absolute top-[27%] left-[27%]"
              size={20}
            />
          </div>
          <span className="text-white">Goals</span>
        </div>
        <div className="bg-[rgba(105,105,105,0.5)] rounded-full p-1">
          <ChevronRight color="#ffffff" size={16} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <div className="bg-[rgba(87,114,176,0.4)] w-11 h-11 relative rounded-full">
            <Salad
              color="#464abe"
              className="absolute top-[27%] left-[27%]"
              size={20}
            />
          </div>
          <span className="text-white">Popular Dishes</span>
        </div>
        <div className="bg-[rgba(105,105,105,0.5)] rounded-full p-1">
          <ChevronRight color="#ffffff" size={16} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <div className="bg-[rgba(61,119,107,0.7)] w-11 h-11 relative rounded-full">
            <CookingPot
              color="#2a7a6a"
              className="absolute top-[27%] left-[27%]"
              size={20}
            />
          </div>
          <span className="text-white">Menus</span>
        </div>
        <div className="bg-[rgba(105,105,105,0.5)] rounded-full p-1">
          <ChevronRight color="#ffffff" size={16} />
        </div>
      </div>
    </div>
  );
};

export default Menus;
