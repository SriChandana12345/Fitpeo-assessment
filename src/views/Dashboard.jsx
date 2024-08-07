import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Cards from "../components/Cards";
import Activity from "../components/Activity";
import RecentOrders from "../components/RecentOrders";
import NetProfit from "../components/NetProfit";
import Menus from "../components/Menus";
import Feedback from "../components/Feedback";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-start h-screen w-screen text-white">
        <SideBar />
        <div className="w-full bg-black h-full overflow-y-scroll">
          <Header />
          <div className="h-[calc(100vh-6.8vh)] flex flex-col w-full px-6 gap-4 py-4">
            <span className="text-lg font-semibold">Dashboard</span>

            <div className="lg:hidden flex flex-col items-center justify-between w-full h-full gap-5">
              <div className="flex flex-wrap gap-4">
                <Cards
                  className={"text-green-800"}
                  color={"#166534"}
                  rotate=""
                />
                <Cards
                  className={"text-red-800"}
                  color={"#991b1b"}
                  rotate={"rotate-180"}
                />
                <Cards
                  className={"text-green-800"}
                  color={"#166534"}
                  rotate=""
                />
                <Cards
                  className={"text-red-800"}
                  color={"#991b1b"}
                  rotate={"rotate-180"}
                />
                <Cards
                  className={"text-red-800"}
                  color={"#991b1b"}
                  rotate={"rotate-180"}
                />
              </div>
              <Activity />
              <RecentOrders />
              <NetProfit />
              <Menus />
              <Feedback />
            </div>

            <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full lg:h-full lg:gap-5">
              <div className="w-[60%] h-full flex flex-col gap-5">
                <div className="flex flex-wrap gap-4">
                  <Cards
                    className={"text-green-800"}
                    color={"#166534"}
                    rotate=""
                  />
                  <Cards
                    className={"text-red-800"}
                    color={"#991b1b"}
                    rotate={"rotate-180"}
                  />
                  <Cards
                    className={"text-green-800"}
                    color={"#166534"}
                    rotate=""
                  />
                  <Cards
                    className={"text-red-800"}
                    color={"#991b1b"}
                    rotate={"rotate-180"}
                  />
                  <Cards
                    className={"text-red-800"}
                    color={"#991b1b"}
                    rotate={"rotate-180"}
                  />
                </div>
                <Activity />
                <RecentOrders />
              </div>
              <div className="w-[38%] flex flex-col gap-5 h-full">
                <NetProfit />
                <Menus />
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
