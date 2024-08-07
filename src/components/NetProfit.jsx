import React from "react";
import { Triangle } from "lucide-react";

const NetProfit = () => {
  return (
    <div className="lg:h-[8.31rem] bg-n1 rounded-[4px] p-3 flex items-center justify-between w-full">
      <div className="flex flex-col gap-3">
        <span className="text-xs mb-1">Net Profit</span>
        <span className="text-lg lg:text-3xl font-bold">$ 6759.25</span>
        <div className="flex items-center gap-1">
          <Triangle color="#15803d" fill="#15803d" size={10} className="mt-[0.5px]"/>
          <span className="text-xs text-green-700 font-bold">3%</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center pr-3">
        <div className="flex flex-col items-center justify-center w-20 h-20 border-[10px] rounded-full border-l-blue-800 border-blue-400">
          <span className="text-md font-semibold">70%</span>
          <span className="text-[9px] text-center text-slate-300 leading-none">Goal<br/> Completed</span>
        </div>
        <span className="text-[9px] text-slate-300">*The values here has been rounded off.</span>
      </div>
    </div>
  );
};

export default NetProfit;
