// import { FaUserCircle, FaEdit } from 'react-icons/fa';

// const Profile = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           {/* Profile Header */}
//           <div className="bg-blue-600 px-6 py-8 text-center">
//             <div className="relative inline-block">
//               <FaUserCircle className="text-white text-8xl mx-auto" />
//               <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
//                 <FaEdit className="text-blue-600" />
//               </button>
//             </div>
//             <h1 className="text-2xl font-bold text-white mt-4">John Doe</h1>
//             <p className="text-blue-100">john.doe@example.com</p>
//           </div>
          
//           {/* Profile Details */}
//           <div className="px-6 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h2 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-sm text-gray-500">Full Name</p>
//                     <p className="text-gray-900">John Doe</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Mobile Number</p>
//                     <p className="text-gray-900">+1 234 567 890</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Role</p>
//                     <p className="text-gray-900">Client</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h2 className="text-lg font-medium text-gray-900 mb-2">Account Information</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-sm text-gray-500">Email Address</p>
//                     <p className="text-gray-900">john.doe@example.com</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Account Created</p>
//                     <p className="text-gray-900">June 15, 2023</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-6 border-t border-gray-200">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../Context/context';
// // import Profile from './Profile';
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ProfilePage = () => {
// //   const { userId } = useParams();
// //   const { currentUser } = useAuth();
// //   const navigate = useNavigate();
// //   const [profileData, setProfileData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProfileData = async () => {
// //       try {
// //         setLoading(true);
// //         // Replace with your actual API call
// //         const response = await axios.get(`/api/users/${userId || currentUser.id}`);
// //         setProfileData(response.data);
// //       } catch (err) {
// //         setError(err.message);
// //         navigate('/');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfileData();
// //   }, [userId, currentUser.id, navigate]);

// //   const handleSave = async (updatedData) => {
// //     try {
// //       await axios.put(`/api/users/${currentUser.id}`, updatedData);
// //       const response = await axios.get(`/api/users/${currentUser.id}`);
// //       setProfileData(response.data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   if (loading) return <div className="text-center py-8">Loading profile...</div>;
// //   if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
// //   if (!profileData) return <div className="p-4">No profile data found</div>;

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <Profile 
// //         role={currentUser.role} 
// //         profileData={profileData}
// //         onSave={handleSave}
// //       />
// //     </div>
// //   );
// // };

// // export default ProfilePage;import { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { useAuth } from '../Context/context';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { currentUser } = useAuth();
  const userId = currentUser?.id;
  // console.log(userId);
  // console.log(currentUser);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const id = userId || currentUser.id;
        const response = await axios.get(`/api/users/${id}`);
        setProfileData(response.data);
      } catch (err) {
        setError(err.message);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, currentUser.id, navigate]);

  if (loading) return <div className="text-center py-8">Loading profile...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!profileData) return <div className="p-4">No profile data found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-8 text-center">
            <div className="relative inline-block">
              <FaUserCircle className="text-white text-8xl mx-auto" />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <FaEdit className="text-blue-600" />
              </button>
            </div>
            <h1 className="text-2xl font-bold text-white mt-4">{profileData.name}</h1>
            <p className="text-blue-100">{profileData.email}</p>
          </div>

          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-gray-900">{profileData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="text-gray-900">{profileData.mobile}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="text-gray-900">{profileData.role}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="text-gray-900">{profileData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Created</p>
                    <p className="text-gray-900">
                      {new Date(profileData.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
