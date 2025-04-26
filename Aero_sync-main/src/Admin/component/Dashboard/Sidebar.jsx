
// import { Link, useLocation } from "react-router-dom";
// import {
//   Home,
//   Users,
//   Briefcase,
//   FileText,
//   Plane,
//   Banknote,
//   Settings,
// } from "lucide-react";
// import { cn } from "@/lib/utils"; // Optional utility

// const navItems = [
//   { label: "Dashboard", icon: <Home />, path: "/dashboard" },
//   { label: "Client", icon: <Users />, path: "/client" },
//   { label: "Crew", icon: <Users />, path: "/crew" },
//   { label: "Trip", icon: <Briefcase />, path: "/trip" },
//   { label: "Contract", icon: <FileText />, path: "/contract" },
//   { label: "Document", icon: <FileText />, path: "/document" },
//   { label: "Aircraft", icon: <Plane />, path: "/aircraft" },
//   { label: "Bank detail", icon: <Banknote />, path: "/bank" },
//   { label: "Settings", icon: <Settings />, path: "/settings" },
// ];

// export default function Sidebar() {
//   const location = useLocation();

//   return (
//     <aside className="w-64  bg-white border-r h-screen flex flex-col justify-between">
//       <div className="">
//         {/* <h1 className="text-2xl font-bold mb-6">✈️ Aero Sync</h1> */}
//         <ul className="space-y-2 mt-2">
//           {navItems.map((item) => (
//             <li key={item.label}>
//               <Link to={item.path}>
//                 <div
//                   className={cn(
//                     "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100",
//                     location.pathname === item.path && "bg-gray-200 font-semibold"
//                   )}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  FileText,
  Plane,
  Banknote,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Optional utility
import { useAuth } from "../../../Context/context"; // Import your auth context

// Define all possible navigation items
const allNavItems = {
  admin: [
    { label: "Dashboard", icon: <Home />, path: "/dashboard" },
    { label: "Client", icon: <Users />, path: "/client" },
    { label: "Crew", icon: <Users />, path: "/crew" },
    { label: "Trip", icon: <Briefcase />, path: "/trip" },
    { label: "Contract", icon: <FileText />, path: "/contract" },
    { label: "Document", icon: <FileText />, path: "/document" },
    { label: "Aircraft", icon: <Plane />, path: "/aircraft" },
    { label: "Bank detail", icon: <Banknote />, path: "/bank" },
    { label: "Settings", icon: <Settings />, path: "/settings" },
  ],
  client: [
    { label: "Dashboard", icon: <Home />, path: "/dashboard" },
    { label: "Trips", icon: <Briefcase />, path: "/trip" },
    { label: "Contract", icon: <FileText />, path: "/contract" },
    { label: "Documents", icon: <FileText />, path: "/document" },
    { label: "Aircraft", icon: <Plane />, path: "/aircraft" },
    { label: "Settings", icon: <Settings />, path: "/settings" },
  ],
  crew: [
    { label: "Dashboard", icon: <Home />, path: "/dashboard" },
    { label: "Trips", icon: <Briefcase />, path: "/trip" },
    { label: "Contract", icon: <FileText />, path: "/contract" },
    { label: "Documents", icon: <FileText />, path: "/document" },
    { label: "Settings", icon: <Settings />, path: "/settings" },
  ],
};

export default function Sidebar() {
  const location = useLocation();
  
  // Get user role from your authentication context or state management
  // This is just an example - replace with your actual role detection
  // const userRole = "crew"; /S/ This would come from your auth context
  const { userRole } = useAuth(); 
  // Get the appropriate nav items based on role
  const navItems = allNavItems[userRole] || allNavItems.client;

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col justify-between">
      <div className="">
        <ul className="space-y-2 mt-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100",
                    location.pathname === item.path && "bg-gray-200 font-semibold"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}