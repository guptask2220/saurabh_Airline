// import { useState } from 'react';
// import { FaBell, FaUser, FaChevronDown, FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/context'; // adjust path accordingly

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();
//   const { isLoggedIn, logout, user } = useAuth();

//   const handleLogout = () => {
//     logout();
//     setShowDropdown(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-xl py-2 px-6 flex items-center border bottom-4 justify-between">
//       <div className="flex items-center">
//         <h1 className="text-2xl font-bold m-2">✈️ Aero Sync</h1>
//       </div>

//       <div className="flex items-center space-x-6">
//         <button className="text-gray-600 hover:text-blue-600 relative">
//           <FaBell size={20} />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//             3
//           </span>
//         </button>

//         <div className="h-6 w-px bg-gray-300"></div>

//         {isLoggedIn ? (
//           <div className="relative">
//             <button
//               className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <FaUserCircle size={20} />
//               <span>{currentUser?.name || "John Doe"}</span>
//               <FaChevronDown size={12} />
//             </button>

//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
//                   onClick={() => setShowDropdown(false)}
//                 >
//                   <FaUser className="mr-2" /> Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
//                 >
//                   <FaSignOutAlt className="mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             to="/login"
//             className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             <FaSignInAlt /> <span>Login</span>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from 'react';
// import { FaBell, FaUser, FaChevronDown, FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/context';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();
//   const { isLoggedIn, logout, currentUser } = useAuth(); // ✅ Only call useAuth once

//   const handleLogout = () => {
//     logout();
//     setShowDropdown(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-xl py-2 px-6 flex items-center border bottom-4 justify-between">
//       <div className="flex items-center">
//         <h1 className="text-2xl font-bold m-2">✈️ Aero Sync</h1>
//       </div>

//       <div className="flex items-center space-x-6">
//         <button className="text-gray-600 hover:text-blue-600 relative">
//           <FaBell size={20} />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//             3
//           </span>
//         </button>

//         <div className="h-6 w-px bg-gray-300"></div>
        
//         {isLoggedIn ? (
//           <div className="relative">
//             <button
//               className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <FaUserCircle size={20} />
              
//               <span>{currentUser?.name || "John Doe"}</span>
//               <FaChevronDown size={12} />
//             </button>

//             {showDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
//                   onClick={() => setShowDropdown(false)}
//                 >
//                   <FaUser className="mr-2" /> Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
//                 >
//                   <FaSignOutAlt className="mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             to="/login"
//             className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             <FaSignInAlt /> <span>Login</span>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from 'react';
import { FaBell, FaUser, FaChevronDown, FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/context';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout, currentUser } = useAuth();

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-xl py-2 px-6 flex items-center border bottom-4 justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold m-2">✈️ Aero Sync</h1>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-blue-600 relative">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="h-6 w-px bg-gray-300"></div>

        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUserCircle size={20} />
              <span>{currentUser?.name || "John Doe"}</span>
              <FaChevronDown size={12} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaUser className="mr-2" /> Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FaSignInAlt /> <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
