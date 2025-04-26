// import { createContext, useContext, useState } from 'react';  // Make sure to import createContext

// const AuthContext = createContext();  // Now this will work

// export const AuthProvider = ({ children }) => {
//   // Initialize userRole from localStorage if available
//   const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const switchRole = (newRole) => {
//     setUserRole(newRole);
//     localStorage.setItem('role', newRole); // Store role in localStorage
//   };

//   const login = (token, role) => {
//     localStorage.setItem('token', token);
//     setIsLoggedIn(true);
//     switchRole(role);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserRole(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//   };

//   return (
//     <AuthContext.Provider value={{ 
//       userRole, 
//       isLoggedIn,
//       switchRole, 
//       login, 
//       logout 
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//   const [currentUser, setCurrentUser] = useState(
//     localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
//   );
//   const switchRole = (newRole) => {
//     setUserRole(newRole);
//     localStorage.setItem('role', newRole); // Store role in localStorage
//   };

//   const login = (token, role, user) => {
//     localStorage.setItem('token', token);        // Store token
//     localStorage.setItem('role', role);          // Store role
//     localStorage.setItem('user', JSON.stringify(user)); // ✅ Store full user data
    
//     setIsLoggedIn(true);                         // Update login state
//     setUserRole(role);                           // Set role
//     setCurrentUser(user);                        // ✅ Set user in context
//   };
  

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserRole(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//   };

//   return (
//     <AuthContext.Provider value={{ userRole, isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  );

  const switchRole = (newRole) => {
    setUserRole(newRole);
    localStorage.setItem('role', newRole);
  };

  const login = (token, role, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));

    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ userRole, isLoggedIn, currentUser, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

