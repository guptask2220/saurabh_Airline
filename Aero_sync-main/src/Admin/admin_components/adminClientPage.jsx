// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   IconButton,
//   Menu,
//   Typography,
//   Grid,
//   Paper
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const AdminClientPage = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [clients, setClients] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedClientId, setSelectedClientId] = useState(null);
//   const openMenu = Boolean(anchorEl);

//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     countryCode: '+1',
//     companyName: '',
//     companyRegistration: '',
//     email: ''
//   });

//   const companyOptions = [
//     'Acme Inc',
//     'Globex Corporation',
//     'Soylent Corp',
//     'Initech',
//     'Umbrella Corporation',
//     'Wonka Industries'
//   ];

//   const countryCodes = [
//     { code: '+1', name: 'USA' },
//     { code: '+44', name: 'UK' },
//     { code: '+91', name: 'India' },
//     { code: '+61', name: 'Australia' },
//     { code: '+33', name: 'France' },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newClient = {
//       id: Date.now(),
//       name: `${formData.firstName} ${formData.lastName}`,
//       companyName: formData.companyName,
//       companyRegistration: formData.companyRegistration,
//       phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
//       email: formData.email
//     };

//     setClients([...clients, newClient]);
//     setFormData({
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       countryCode: '+1',
//       companyName: '',
//       companyRegistration: '',
//       email: ''
//     });
//     setOpenDialog(false);
//   };

//   const handleMenuClick = (event, clientId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedClientId(clientId);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedClientId(null);
//   };

//   const handleDelete = () => {
//     setClients(clients.filter(client => client.id !== selectedClientId));
//     handleMenuClose();
//   };

//   const handleEdit = () => {
//     // Find the client to edit
//     const clientToEdit = clients.find(client => client.id === selectedClientId);
//     if (clientToEdit) {
//       // Split the name into first and last
//       const [firstName, lastName] = clientToEdit.name.split(' ');
//       // Split the phone number into code and number
//       const [countryCode, ...phoneParts] = clientToEdit.phoneNumber.split(' ');
//       const phoneNumber = phoneParts.join(' ');

//       setFormData({
//         firstName: firstName || '',
//         lastName: lastName || '',
//         phoneNumber: phoneNumber || '',
//         countryCode: countryCode || '+1',
//         companyName: clientToEdit.companyName || '',
//         companyRegistration: clientToEdit.companyRegistration || '',
//         email: clientToEdit.email || ''
//       });

//       // Remove the old entry
//       setClients(clients.filter(client => client.id !== selectedClientId));
//       setOpenDialog(true);
//     }
//     handleMenuClose();
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper sx={{ p: 2, mb: 2 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//           <Typography variant="h4">Client List</Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpenDialog(true)}
//           >
//             Add Member
//           </Button>
//         </Box>

//         {/* Client Table */}
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Company Name</TableCell>
//               <TableCell>Company Registration</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {clients.map((client) => (
//               <TableRow key={client.id}>
//                 <TableCell>{client.name}</TableCell>
//                 <TableCell>{client.companyName}</TableCell>
//                 <TableCell>{client.companyRegistration}</TableCell>
//                 <TableCell>{client.phoneNumber}</TableCell>
//                 <TableCell>{client.email}</TableCell>
//                 <TableCell className='flex flex-col'>
//                   <IconButton onClick={() => handleDelete(client.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                   <IconButton
//                     onClick={(e) => handleMenuClick(e, client.id)}
//                   >
//                     <MoreVertIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>

//       {/* Add Client Dialog */}
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
//         <DialogTitle>Create Client Account</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2} sx={{ mt: 1 }}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="First Name *"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   placeholder="First Name"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Last Name *"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   placeholder="Last Name"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <FormControl fullWidth>
//                   <InputLabel>Country Code</InputLabel>
//                   <Select
//                     name="countryCode"
//                     value={formData.countryCode}
//                     onChange={handleInputChange}
//                     label="Country Code"
//                   >
//                     {countryCodes.map((country) => (
//                       <MenuItem key={country.code} value={country.code}>
//                         {country.name} ({country.code})
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Mobile Number"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   placeholder="Mobile Number"
//                   type="tel"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel>Company Name</InputLabel>
//                   <Select
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleInputChange}
//                     label="Company Name"
//                     placeholder="Company Name"
//                   >
//                     {companyOptions.map((company) => (
//                       <MenuItem key={company} value={company}>
//                         {company}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Company Registration Number"
//                   name="companyRegistration"
//                   value={formData.companyRegistration}
//                   onChange={handleInputChange}
//                   placeholder="Company Registration Number"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Email"
//                   type="email"
//                 />
//               </Grid>
//             </Grid>
//             <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//               <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//               <Button type="submit" variant="contained">Save</Button>
//             </Box>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* Action Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={openMenu}
//         onClose={handleMenuClose}
//       >
//         <MenuItem onClick={handleEdit}>
//           <EditIcon sx={{ mr: 1 }} />
//           Edit
//         </MenuItem>
//         <MenuItem onClick={handleDelete}>
//           <DeleteIcon sx={{ mr: 1 }} />
//           Delete
//         </MenuItem>
//       </Menu>
//     </Box>
//   );
// };

// export default AdminClientPage;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import SingleSelectDropdown from "../../common/MultiDropdownMenu";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminClientPage = () => {
  // State for managing the dialog visibility
  const [openDialog, setOpenDialog] = useState(false);

  // State for storing the list of clients
  const [clients, setClients] = useState([]);

  // State for managing the action menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedClientId, setSelectedClientId] = useState(null);

  //state for managing company
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const openMenu = Boolean(anchorEl);

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+1",
    companyName: "",
    companyRegistration: "",
    email: "",
  });

  // Company options for the dropdown
  const companyOptions = [
    "Acme Inc",
    "Globex Corporation",
    "Soylent Corp",
    "Initech",
    "Umbrella Corporation",
    "Wonka Industries",
  ];

  // Country code options
  const countryCodes = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+91", name: "India" },
    { code: "+61", name: "Australia" },
    { code: "+33", name: "France" },
  ];

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      companyName: formData.companyName,
      companyRegistration: formData.companyRegistration,
      phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
      email: formData.email,
    };

    // Add new client to the list and reset form
    setClients([...clients, newClient]);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "+1",
      companyName: "",
      companyRegistration: "",
      email: "",
    });
    setOpenDialog(false);
  };

  // Handle opening the action menu
  const handleMenuClick = (event, clientId) => {
    setAnchorEl(event.currentTarget);
    setSelectedClientId(clientId);
  };

  // Handle closing the action menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedClientId(null);
  };

  // Handle deleting a client
  const handleDelete = () => {
    setClients(clients.filter((client) => client.id !== selectedClientId));
    handleMenuClose();
  };

  // Handle editing a client
  const handleEdit = () => {
    const clientToEdit = clients.find(
      (client) => client.id === selectedClientId
    );
    if (clientToEdit) {
      const [firstName, lastName] = clientToEdit.name.split(" ");
      const [countryCode, ...phoneParts] = clientToEdit.phoneNumber.split(" ");
      const phoneNumber = phoneParts.join(" ");

      setFormData({
        firstName: firstName || "",
        lastName: lastName || "",
        phoneNumber: phoneNumber || "",
        countryCode: countryCode || "+1",
        companyName: clientToEdit.companyName || "",
        companyRegistration: clientToEdit.companyRegistration || "",
        email: clientToEdit.email || "",
      });

      setClients(clients.filter((client) => client.id !== selectedClientId));
      setOpenDialog(true);
    }
    handleMenuClose();
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* Header section with title and add button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Typography variant="h5">Client List</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{ backgroundColor: "green" }}
          className="hover:bg-blue-600 text-white"
          onClick={() => setOpenDialog(true)}
        >
          Add Member
        </Button>
      </div>

      {/* Client Table */}
      <div style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-extrabold">Name</TableCell>
              <TableCell className="font-bold">Company Name</TableCell>
              <TableCell className="font-bold">Company Registration</TableCell>
              <TableCell className="font-bold">Phone Number</TableCell>
              <TableCell className="font-bold">Email</TableCell>
              <TableCell className="font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.companyName}</TableCell>
                <TableCell>{client.companyRegistration}</TableCell>
                <TableCell>{client.phoneNumber}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>
                  {/* <IconButton onClick={() => handleDelete(client.id)}>
                    <DeleteIcon />
                  </IconButton> */}
                  <IconButton onClick={(e) => handleMenuClick(e, client.id)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Client Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Create Client Account</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Form fields container */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                {/* First Name */}
                <TextField
                  fullWidth
                  label="First Name "
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />

                {/* Last Name */}
                <TextField
                  fullWidth
                  label="Last Name *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="w-full flex flex-row">
                {/* <InputLabel>Company Name</InputLabel> */}

                <Select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  label="Country Code"
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Mobile Number"
                  type="tel"
                />
              </div>

              <SingleSelectDropdown
                options={companyOptions}
                label="company name"
                selectedItem={formData.companyName}
                onSelect={(value) =>
                  setFormData({ ...formData, companyName: value })
                }
              />

              <TextField
                fullWidth
                label="Company Registration Number"
                name="companyRegistration"
                value={formData.companyRegistration}
                onChange={handleInputChange}
                placeholder="Company Registration Number"
              />

              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                type="email"
              />
            </div>

            {/* Form buttons */}
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Action Menu */}
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>
          <EditIcon style={{ marginRight: "8px" }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon style={{ marginRight: "8px" }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AdminClientPage;
