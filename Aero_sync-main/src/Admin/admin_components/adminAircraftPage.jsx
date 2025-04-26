// // pages/AdminAircraftPage.jsx
// import { useState } from 'react';
// import { FiPlus } from 'react-icons/fi';
// import AircraftForm from '../../common/AircraftForm';
// import AircraftTable from '../component/Aircraft/AircraftTable';
// // import { aircraftFormConfig } from '../component/Aircraft/aircraftFormConfig';
// import { Dialog, DialogTitle, DialogContent } from '@mui/material';
// const AdminAircraftPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [aircrafts, setAircrafts] = useState([
    
//     // ... more aircrafts
//   ]);

//   const handleSubmit = (formData) => {
//     // In a real app, you would upload the file and get a URL
//     const newAircraft = {
//       id: aircrafts.length + 1,
//       photoUrl: URL.createObjectURL(formData.photo),
//       client: 'New Client', // You might want to add client selection to your form
//       owner: formData.owner,
//       operator: formData.operator,
//       type: formData.type,
//       registrationNumber: formData.registrationNumber
//     };
    
//     setAircrafts([...aircrafts, newAircraft]);
//     setShowForm(false);
//   };

//   const handleDelete = (id) => {
//     setAircrafts(aircrafts.filter(aircraft => aircraft.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Aircraft</h1>
//         <button
//           onClick={() => setShowForm(true)}
//           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           <FiPlus />
//           <span>Add aircraft</span>
//         </button>
//       </div>

//       <Dialog
//   open={showForm}
//   onClose={() => setShowForm(false)}
//   maxWidth="md"
//   fullWidth
// >
//   {/* <DialogTitle>Add Aircraft</DialogTitle> */}
//   <DialogContent>
//     <AircraftForm
//       onSubmit={handleSubmit}
//       onCancel={() => setShowForm(false)}
//     />
//   </DialogContent>
// </Dialog>


//       <AircraftTable 
//         aircrafts={aircrafts} 
//         onDelete={handleDelete} 
//       />
//     </div>
//   );
// };

// export default AdminAircraftPage;


import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AircraftForm from '../../common/AircraftForm';
import AircraftTable from '../component/Aircraft/AircraftTable';
import { Dialog, DialogContent } from '@mui/material';

const AdminAircraftPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingAircraft, setEditingAircraft] = useState(null);
  const [aircrafts, setAircrafts] = useState([
    // Sample data
    {
      id: 1,
      photoUrl: 'https://example.com/aircraft1.jpg',
      client: 'Client A',
      owner: 'Owner A',
      operator: 'Operator A',
      type: 'Boeing 737',
      registrationNumber: 'N12345'
    },
    // ... more aircrafts
  ]);

  const handleSubmit = (formData) => {
    if (editingAircraft) {
      // Update existing aircraft
      const updatedAircrafts = aircrafts.map(aircraft => 
        aircraft.id === editingAircraft.id ? {
          ...aircraft,
          photoUrl: formData.photo ? URL.createObjectURL(formData.photo) : aircraft.photoUrl,
          client: formData.client || aircraft.client,
          owner: formData.owner,
          operator: formData.operator,
          type: formData.type,
          registrationNumber: formData.registrationNumber
        } : aircraft
      );
      setAircrafts(updatedAircrafts);
    } else {
      // Add new aircraft
      const newAircraft = {
        id: aircrafts.length + 1,
        photoUrl: URL.createObjectURL(formData.photo),
        client: formData.client || 'New Client',
        owner: formData.owner,
        operator: formData.operator,
        type: formData.type,
        registrationNumber: formData.registrationNumber
      };
      setAircrafts([...aircrafts, newAircraft]);
    }
    setShowForm(false);
    setEditingAircraft(null);
  };

  const handleDelete = (id) => {
    setAircrafts(aircrafts.filter(aircraft => aircraft.id !== id));
  };

  // Add this function to handle edit
  const handleEdit = (id) => {
    const aircraftToEdit = aircrafts.find(aircraft => aircraft.id === id);
    setEditingAircraft(aircraftToEdit);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Aircraft</h1>
        <button
          onClick={() => {
            setEditingAircraft(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <FiPlus />
          <span>Add aircraft</span>
        </button>
      </div>

      <Dialog
        open={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingAircraft(null);
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <AircraftForm
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingAircraft(null);
            }}
            initialData={editingAircraft}
          />
        </DialogContent>
      </Dialog>

      <AircraftTable 
        aircrafts={aircrafts} 
        onDelete={handleDelete}
        onEdit={handleEdit} 
      />
    </div>
  );
};

export default AdminAircraftPage;