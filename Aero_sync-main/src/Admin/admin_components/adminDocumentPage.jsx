// pages/DocumentPage.jsx
import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import DocumentCard from '../../common/DocumentCard';
import Img1 from '../../assets/boy01.jpg'

const AdminDocumentPage = () => {
  const [activeTab, setActiveTab] = useState('uploaded');
  const [uploadedDocuments, setUploadedDocuments] = useState([
    {
      id: 1,
      name: 'Service Agreement LOI',
      image: Img1,
      pdf: Img1,
      autoAttach: true
    },
    // ... other documents
  ]);

  const [tripContracts, setTripContracts] = useState([
    {
      tripName: 'Trip name 01',
      documents: [
        {
          id: 1,
          name: 'Trip Contract 01',
          image: Img1,
          pdf: Img1,
          autoAttach: true
        }, {
          id: 2,
          name: 'Trip Contract 01',
          image: Img1,
          pdf: Img1,
          autoAttach: false
        }, {
          id: 3,
          name: 'Trip Contract 01',
          image: Img1,
          pdf: Img1,
          autoAttach: true
        }
      ]
    },
    // ... other trips
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic
      console.log('File selected:', file.name);
    }
  };

  const toggleAutoAttach = (id, isTripContract = false) => {
    if (isTripContract) {
      setTripContracts(prev => prev.map(trip => ({
        ...trip,
        documents: trip.documents.map(doc => 
          doc.id === id ? { ...doc, autoAttach: !doc.autoAttach } : doc
        )
      })));
    } else {
      setUploadedDocuments(prev => 
        prev.map(doc => 
          doc.id === id ? { ...doc, autoAttach: !doc.autoAttach } : doc
        )
      );
    }
  };

  const openDocument = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const downloadDocument = (pdfUrl, fileName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Document</h1>
        <div className="relative">
          <input
            type="file"
            id="document-upload"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label
            htmlFor="document-upload"
            className="flex items-center gap-2 bg-[#828282] text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          >
            <FiUpload />
            <span>Upload</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'uploaded' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('uploaded')}
          >
            Uploaded
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'tripContracts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('tripContracts')}
          >
            Trip Contracts
          </button>
        </div>
      </div>

      {activeTab === 'uploaded' && (
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">Uploaded</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadedDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onToggleAutoAttach={() => toggleAutoAttach(doc.id)}
                onDownload={downloadDocument}
                onOpen={openDocument}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tripContracts' && (
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">Trip Contracts</h2> */}
          {tripContracts.map((trip, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-medium mb-4">{trip.tripName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trip.documents.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    document={doc}
                    onToggleAutoAttach={() => toggleAutoAttach(doc.id, true)}
                    onDownload={downloadDocument}
                    onOpen={openDocument}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDocumentPage;