import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AdminCrewPage = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    companyName: '',
    companyRegNumber: '',
    type: 'Flight crew' // Added type field
  });

  const crewTypes = ["Flight crew", "Cabin crew", "Maintenance"];

  const handleAddMember = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: crewMembers.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      type: formData.type,
      mobile: formData.mobile,
      email: formData.email,
      // These fields are collected but not displayed in table
      companyName: formData.companyName,
      companyRegNumber: formData.companyRegNumber
    };
    
    console.log("Adding new member:", newMember);
    setCrewMembers([...crewMembers, newMember]);
    setFormData({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      // companyName: '',
      // companyRegNumber: '',
      type: 'Flight crew'
    });
    closeFormModal();
  };

  const handleDelete = (id) => {
    setCrewMembers(crewMembers.filter(member => member.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Crew Management</h2>
        <div
          onClick={handleAddMember}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Add Crew Member
        </div>
      </div>

      {/* Form Modal */}
      <Dialog open={showFormModal} onClose={closeFormModal} maxWidth="sm" >
        <DialogTitle>Add Crew Member</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
            </Box>
            
            <TextField
              select
              fullWidth
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              {crewTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </TextField>
            
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              type="tel"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              required
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            {/* <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              variant="outlined"
              sx={{ mb: 2 }}
            /> */}
            
            {/* <TextField
              fullWidth
              label="Company Registration Number"
              name="companyRegNumber"
              value={formData.companyRegNumber}
              onChange={handleInputChange}
              variant="outlined"
            /> */}
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={closeFormModal} variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Member
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Crew Members Table - Showing only required columns */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-200 bg-[#F2F2F2]">
          <thead className="bg-[#F2F2F2]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                Phone number
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {crewMembers.length > 0 ? (
              crewMembers.map((member) => (
                <tr key={member.id} className="bg-[#F2F2F2] hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {member.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {member.mobile || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {member.email || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <IconButton onClick={() => handleDelete(member.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No crew members added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCrewPage;