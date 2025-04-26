import React from "react";
import Sidebar from "../component/Dashboard/Sidebar";
import TopBar from "../component/Dashboard/TopBar";
import StatCard from "../component/Dashboard/StatCard";
import PersonItem from "../component/Dashboard/PersonItem";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import boy01 from "../../assets/boy01.jpg";
import analytic from "../../assets/Vector.png";
function AdminDashboardPage() {
  const clients = [
    {
      name: "Dan Seo Hyun",
      position: "Flight Crew",
      img: boy01,
    },
    {
      name: "Alyhan Seven",
      position: "Flight Crew",
      img: "https://picsum.photos/id/1011/40",
    },
    {
      name: "Latifah Owusu",
      position: "Pilot",
      img: "https://picsum.photos/id/1012/40",
    },
    {
      name: "So Jung Mo",
      position: "Flight Crew",
      img: "https://picsum.photos/id/1013/40",
    },
    {
      name: "Duong Hai",
      position: "Pilot",
      img: "https://picsum.photos/id/1015/40",
    },
    {
      name: "Dan Seo Hyun",
      position: "Flight Crew",
      img: boy01,
    },
    {
      name: "Alyhan Seven",
      position: "Flight Crew",
      img: "https://picsum.photos/id/1011/40",
    },
    {
      name: "Latifah Owusu",
      position: "Pilot",
      img: "https://picsum.photos/id/1012/40",
    },
    {
      name: "So Jung Mo",
      position: "Flight Crew",
      img: "https://picsum.photos/id/1013/40",
    },
    {
      name: "Duong Hai",
      position: "Pilot",
      img: "https://picsum.photos/id/1015/40",
    },
  ];
  const aircraft = [
    {
      name: "Latifah Owusu",
      position: "Pilot",
      img: "https://picsum.photos/id/1012/40",
    },
    {
      name: "So Jung Mo",
      position: "Flight Crew",
      img: "https://picsum.photos/id/1013/40",
    },
    {
      name: "Duong Hai",
      position: "Pilot",
      img: "https://picsum.photos/id/1015/40",
    },
  ];

  const [active, setActive] = useState("Daily");

  const buttons = ["Daily", "Weekly", "Monthly"];

  return (
    // <div className="flex h-screen w-full bg-gray-50 text-gray-800">
    //   <Sidebar />

    //   {/* MAIN CONTENT */}
    //   <div className="flex flex-col flex-1">
    //     {/* <TopBar /> */}
    //     <h2 className="text-xl font-semibold">Dashboard</h2>


    //     {/* DASHBOARD CONTENT */}
    //     <div className="flex-1 overflow-y-auto p-6">
    //       {/* Stats Cards */}
    //       <div className="grid grid-cols-3 gap-6 mb-6">
    //         <StatCard title="Clients" value="600" />
    //         <StatCard title="Trips" value="274" />
    //         <StatCard title="Crew Member" value="816" />
    //       </div>

    //       {/* Middle Section: Chart & Right Sidebar */}
    //       <div className="flex space-x-6 items-stretch h-full">
    //         {/* Chart / Earning Section */}
    //         <div className=" w-[80%] space-y-7">
    //           <div className="flex-1 bg-white rounded-xl shadow p-6">
    //             <div className="flex items-center justify-between mb-4">
    //               <h3 className="text-lg font-semibold">Earning</h3>
    //               <div className="flex space-x-2 text-sm">
    //                 {buttons.map((label) => (
    //                   <button
    //                     key={label}
    //                     onClick={() => setActive(label)}
    //                     className={`px-2 py-1 rounded tracking-widest focus:outline-none ${
    //                       active === label
    //                         ? "font-bold underline underline-offset-8"
    //                         : ""
    //                     }`}
    //                   >
    //                     {label}
    //                   </button>
    //                 ))}
    //               </div>
    //             </div>

    //             <div className="text-2xl font-bold mb-2">
    //               $3468.96
    //               <span className="ml-2 text-sm font-normal text-gray-500">
    //                 Current week's earning
    //               </span>
    //             </div>

    //             <div className="h-48 bg-gray-100 flex items-center justify-center rounded">
    //               <span className="text-gray-400"><img src={analytic} alt="" srcset="" /></span>
    //             </div>
    //           </div>
    //           <div className="h-36 space-y-6">
    //             <div className="bg-white rounded-xl shadow p-4">
    //               <div className="flex flex-row justify-between items-center">
    //                 <h3 className="text-lg font-semibold mb-4">Aircraft</h3>
    //                 <Button>See All</Button>
    //               </div>
    //               <ul className="grid grid-cols-3 gap-4">
    //                 {aircraft.map((client, index) => (
    //                   <PersonItem
    //                     key={index}
    //                     name={client.name}
    //                     position={client.position}
    //                     img={client.img}
    //                   />
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Right Sidebar (Profiles) */}
    //         <div className="w-96 space-y-6">
    //           <div className="bg-white rounded-xl shadow p-4">
    //             <div className="flex flex-row justify-between items-center">
    //               <h3 className="text-lg font-semibold mb-4">Crew Member</h3>
    //               <Button>See All</Button>
    //             </div>

    //             {/* Scrollable list */}
    //             <ul className="space-y-3 h-96 overflow-y-auto pr-2">
    //               {clients.map((client, index) => (
    //                 <PersonItem
    //                   key={index}
    //                   name={client.name}
    //                   position={client.position}
    //                   img={client.img}
    //                 />
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-screen w-full bg-gray-50 text-gray-800 overflow-hidden">
  {/* Sidebar */}
  {/* <Sidebar /> */}

  {/* MAIN CONTENT */}
  <div className="flex flex-col flex-1">
    {/* TopBar Placeholder */}
    <h2 className="text-xl font-semibold p-6">Dashboard</h2>

    {/* DASHBOARD CONTENT */}
    <div className="flex-1 px-6 pb-6 overflow-hidden flex flex-col">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <StatCard title="Clients" value="600" />
        <StatCard title="Trips" value="274" />
        <StatCard title="Crew Member" value="816" />
      </div>

      {/* Middle Section: Chart & Right Sidebar */}
      <div className="flex space-x-6 flex-1 overflow-hidden">
        {/* Chart / Earning Section */}
        <div className="w-[80%] flex flex-col space-y-4 overflow-hidden">
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Earning</h3>
              <div className="flex space-x-2 text-sm">
                {buttons.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={`px-2 py-1 rounded tracking-widest focus:outline-none ${
                      active === label
                        ? "font-bold underline underline-offset-8"
                        : ""
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-2xl font-bold mb-0">
              $3468.96
              <span className="ml-2 text-sm font-normal text-gray-500">
                Current week's earning
              </span>
            </div>

            <div className="h-48 bg-gray-100 flex items-center justify-center rounded">
              <img src={analytic} alt="chart" className="h-full object-contain" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex-1 overflow-auto">
            <div className="flex flex-row justify-between items-center ">
              <h3 className="text-lg font-semibold">Aircraft</h3>
              <Button>See All</Button>
            </div>
            <ul className="grid grid-cols-3 gap-4">
              {aircraft.map((client, index) => (
                <PersonItem
                  key={index}
                  name={client.name}
                  position={client.position}
                  img={client.img}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar (Profiles) */}
        <div className="w-96 flex flex-col overflow-hidden">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col flex-1 overflow-hidden">
            <div className="flex flex-row justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Crew Member</h3>
              <Button>See All</Button>
            </div>

            {/* Scrollable list */}
            <ul className="space-y-3 flex-1 overflow-y-auto pr-2">
              {clients.map((client, index) => (
                <PersonItem
                  key={index}
                  name={client.name}
                  position={client.position}
                  img={client.img}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default AdminDashboardPage;
