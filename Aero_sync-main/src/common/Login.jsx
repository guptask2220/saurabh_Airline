// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaLock, FaEnvelope } from 'react-icons/fa';

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Authentication logic would go here
//     setIsLoggedIn(true);
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left side with image */}
//       <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}></div>
      
//       {/* Right side with form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
//           <p className="text-gray-600 mb-8">Login to your account</p>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
            
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
              
//               <div className="text-sm">
//                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
//             >
//               Login
//             </button>
//           </form>
          
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
//                 Create one
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaLock, FaEnvelope } from 'react-icons/fa';
// import { useAuth } from '../Context/context';
// import { toast } from 'react-toastify';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   // const { switchRole ,setIsLoggedIn} = useAuth();

  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await fetch('http://localhost:5000/api/auth/login', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const data = await response.json();

//   //     if (!response.ok) {
//   //       throw new Error(data.message || 'Login failed');
//   //     }

//   //     localStorage.setItem('token', data.token);
//   //     setIsLoggedIn(true); // ✅ now works from context
//   //     switchRole(data.role);

//   //     toast.success('Login successful! 🎉');
//   //     navigate('/');
//   //   } catch (err) {
//   //     toast.error(err.message || 'Login failed 😞');
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       // Use the login function from context
//       login(data.token, data.role);

//       toast.success('Login successful! 🎉');
//       navigate('/');
//     } catch (err) {
//       toast.error(err.message || 'Login failed 😞');
//     }
//   };



//   return (
//     <div className="min-h-screen flex">
//       {/* Left side with image */}
//       <div
//         className="hidden lg:block w-1/2 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
//         }}
//       ></div>

//       {/* Right side with form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
//           <p className="text-gray-600 mb-8">Login to your account</p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
//                 Create one
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../Context/context';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Use the login function from context
      // console.log("data",data);
      login(data.token, data.user.role, data.user);

      toast.success('Login successful! 🎉');
      navigate('/');
    } catch (err) {
      toast.error(err.message || 'Login failed 😞');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        }}
      ></div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Login to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

