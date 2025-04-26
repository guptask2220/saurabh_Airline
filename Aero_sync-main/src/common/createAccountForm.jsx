import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const CreateAccountForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    companyName: '',
    companyRegNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create Client Account</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Box>
          
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            label="Company Registration Number"
            name="companyRegNumber"
            value={formData.companyRegNumber}
            onChange={handleChange}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateAccountForm;