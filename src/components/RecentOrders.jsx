import React from "react";
import userProfile from "../assets/images/userProfile.svg";

const RecentOrders = () => {
  return (
    <div className="bg-n1 py-3 px-6 max-w-full w-full rounded-[4px]">
      <span className="text-lg font-semibold">Recent Orders</span>
      {/* <table className='border-b-2 border-[rgba(200, 200, 200, 0.3)] w-[60%] min-w-[350px] md:w-[450px] lg:min-w-[700px]'>
        <thead className='w-full'>
          <tr>
            <th className="">Customer</th>
            <th className="">Oder No.</th>
            <th className="">Amount</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody className='w-full'>
            <tr>
                <td>Frisher</td>
                <td>2224874</td>
                <td>$562.00</td>
                <td className='bg-green-400 border-1-green rounded-full text-green'>Delivered</td>
            </tr>
        </tbody>
    </table> */}
      <div className="flex flex-col gap-2.5 w-full mt-3">
        <div className="flex w-full items-center justify-between">
          <span className="w-auto md:w-4/12">Customer</span>
          <span className="w-auto md:w-3/12">Order No.</span>
          <span className="w-auto md:w-3/12">Amount</span>
          <span className="w-auto md:w-2/12">Status</span>
        </div>
        <hr className="w-full bg-[rgba(200,200,200,0.01)]"></hr>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 w-auto md:w-4/12 items-center">
            <img src={userProfile} className="rounded-full w-9 h-9" alt="img" />
            Frisher
          </div>
          <span className="w-auto md:w-3/12">2224874</span>
          <span className="w-auto md:w-3/12">$562.00</span>
          <span className="bg-[rgb(60,146,92,0.5)] border-1-green rounded-full text-green px-1 py-0.5 w-auto md:w-2/12 text-green-700 text-center">
            Delivered
          </span>
        </div>
        <hr className="w-full bg-[rgba(200,200,200,0.01)]"></hr>

        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 w-auto md:w-4/12 items-center">
            <img src={userProfile} className="rounded-full w-9 h-9" alt="img" />
            Frisher
          </div>
          <span className="w-auto md:w-3/12">2224874</span>
          <span className="w-auto md:w-3/12">$562.00</span>
          <span className="bg-[rgba(153,27,27,0.5)] border-1-red rounded-full text-red-400 py-0.5 px-1 w-auto md:w-2/12 text-center">
            Cancelled
          </span>
        </div>
        <hr className="w-full bg-[rgba(200,200,200,0.01)]"></hr>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 w-auto md:w-4/12 items-center">
            <img src={userProfile} className="rounded-full w-9 h-9" alt="img" />
            Frisher
          </div>
          <span className="w-auto md:w-3/12">2224874</span>
          <span className="w-auto md:w-3/12">$562.00</span>
          <span className="bg-[rgba(153,27,27,0.5)] border-1-red rounded-full text-red-400 px-1 py-0.5 w-auto md:w-2/12 text-center">
            Pending
          </span>
        </div>
        <hr className="w-full bg-[rgba(200,200,200,0.01)]"></hr>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 w-auto md:w-4/12 items-center">
            <img src={userProfile} className="rounded-full w-9 h-9" alt="img" />
            Frisher
          </div>
          <span className="w-auto md:w-3/12">2224874</span>
          <span className="w-auto md:w-3/12">$562.00</span>
          <span className="bg-[rgb(60,146,92,0.5)] border-1-green rounded-full text-green-700 px-1 py-0.5 w-auto md:w-2/12 text-center">
            Delivered
          </span>
        </div>
        <hr className="w-full bg-[rgba(200,200,200,0.01)]"></hr>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 w-auto md:w-4/12 items-center">
            <img src={userProfile} className="rounded-full w-9 h-9" alt="img" />
            Frisher
          </div>
          <span className="w-auto md:w-3/12">2224874</span>
          <span className="w-auto md:w-3/12">$562.00</span>
          <span className="bg-[rgb(60,146,92,0.5)] border-1-green rounded-full text-green-700 px-1 py-0.5 w-auto md:w-2/12 text-center">
            Delivered
          </span>
        </div>

   
      </div>
    </div>
  );
};

export default RecentOrders;
