// components/DocumentCard.jsx
import { FiDownload, FiEye } from 'react-icons/fi';

const DocumentCard = ({ 
  document, 
  onToggleAutoAttach, 
  onDownload, 
  onOpen,
  showAutoAttach = true 
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-4 flex-grow">
        <img 
          src={document.image} 
          alt={document.name} 
          className="w-full h-40 object-contain mb-3 border"
        />
        <h3 className="font-medium text-lg">{document.name}</h3>
        
        {showAutoAttach && (
          <>
            <hr className="my-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Auto attach with all trips</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={document.autoAttach}
                  onChange={() => onToggleAutoAttach(document.id)}
                  className="sr-only peer "
                />
                <div className="w-11 h-6 bg-[#828282] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </>
        )}
        
        <hr className="my-2" />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onDownload(document.pdf, document.name)}
            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded flex-1 justify-center"
          >
            <FiDownload />
            <span>Download</span>
          </button>
          <button
            onClick={() => onOpen(document.pdf)}
            className="flex items-center gap-1 bg-[#828282] hover:bg-blue-700 text-white px-3 py-1 rounded flex-1 justify-center"
          >
            <FiEye />
            <span>Open</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;