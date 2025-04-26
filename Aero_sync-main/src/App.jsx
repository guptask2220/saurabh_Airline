import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Sidebar from "./Admin/component/Dashboard/Sidebar";
import AdminDashboardPage from "./Admin/admin_components/adminDashboardPage";
import AdminTripPage from "./Admin/admin_components/AdminTripDashboard";
import AdminClientPage from "./Admin/admin_components/adminClientPage";
import AdminDocumentPage from "./Admin/admin_components/adminDocumentPage";
import AdminAircraftPage from "./Admin/admin_components/adminAircraftPage";
import AdminCrewPage from "./Admin/admin_components/adminCrewPage";
import BankManagement from "./Admin/admin_components/adminBankDetails";
import Profile from "./common/Profile";
import Login from "./common/Login";
import Signup from "./common/Signup";
import Navbar from "./common/Navbar";
import Contract from "./Admin/admin_components/adminContractPage";
import { AuthProvider, useAuth } from './Context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

// 🔐 Protected Route component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userRole } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!allowedRoles.includes(userRole)) {
      toast.error("You do not have permission to access this page.");
    }
  }, [userRole, allowedRoles]);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

// ✅ Admin Layout component (included inside this file)
const AdminLayout = () => {
  const { userRole } = useAuth();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        {userRole && <Sidebar />}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Nest admin routes under AdminLayout */}
        <Route path="/*" element={<AdminLayout />}>
          {/* Public/Admin shared routes */}
          <Route index element={<AdminDashboardPage />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="trip" element={<AdminTripPage />} />
          <Route path="contract" element={<Contract />} />
          <Route path="document" element={<AdminDocumentPage />} />
          <Route path="profile" element={<Profile />} />

          {/* Protected routes */}
          <Route path="client" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminClientPage />
            </ProtectedRoute>
          } />
          <Route path="crew" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminCrewPage />
            </ProtectedRoute>
          } />
          <Route path="aircraft" element={
            <ProtectedRoute allowedRoles={['admin', 'client']}>
              <AdminAircraftPage />
            </ProtectedRoute>
          } />
          <Route path="bank" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <BankManagement />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>

      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
