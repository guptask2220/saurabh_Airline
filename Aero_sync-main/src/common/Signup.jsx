// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaPhone, FaEnvelope, FaLock, FaMapMarkerAlt } from 'react-icons/fa';
// import axios from 'axios';

// const Signup = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',  // changed from mobile to phone
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'client',
//     address: ''  // added address field
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.phone) newErrors.phone = 'Phone number is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validate()) return;
  
//     try {
//       const { confirmPassword, ...payload } = formData;
//       const res = await axios.post('http://localhost:5000/api/auth/register', payload);
//       console.log("res :" , res)
  
//       if (res.data && res.data.success) {
//         setIsLoggedIn(true);
//         navigate('/');
//       } else {
//         setErrors({ server: res.data.message || 'Something went wrong' });
//       }
//     } catch (err) {
//       setErrors({ 
//         server: err.response?.data?.message || 'Server error' 
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left side with image */}
//       <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}></div>
      
//       {/* Right side with form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
//           <p className="text-gray-600 mb-8">Join our community today</p>
          
//           {errors.server && (
//             <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//               {errors.server}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUser className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaPhone className="text-gray-400" />
//               </div>
//               <input
//                 type="tel"
//                 name="phone"  // changed from mobile to phone
//                 placeholder="Phone Number"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaMapMarkerAlt className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//               {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
            
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
//             </div>
            
//             <div className="mt-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//               <div className="flex space-x-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="client"
//                     checked={formData.role === 'client'}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-gray-700">Client</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="crew"
//                     checked={formData.role === 'crew'}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-gray-700">Crew</span>
//                 </label>
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors mt-6"
//             >
//               Create Account
//             </button>
//           </form>
          
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client',
    // address: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    // if (!formData.address) newErrors.address = 'Address is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      const { confirmPassword, ...payload } = formData;
      const res = await axios.post('http://localhost:5000/api/auth/register', payload);
      
      if (res.data && res.data.success) {
        toast.success('Account created successfully!');
        setIsLoggedIn(true);
        navigate('/login');
      } else {
        toast.error(res.data.msg || 'Something went wrong');
      }
    } catch (err) {
      // Handle different error response formats
      const errorMessage = err.response?.data?.msg || 
                          err.response?.data?.message || 
                          err.response?.data?.error ||
                          'Server error';
      toast.error(errorMessage);
      
      // If you want to also display field-specific errors
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with image */}
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}></div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600 mb-8">Join our community today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Address */}
            {/* <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div> */}

            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Role */}
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="client"
                    checked={formData.role === 'client'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Client</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="crew"
                    checked={formData.role === 'crew'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Crew</span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors mt-6"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
