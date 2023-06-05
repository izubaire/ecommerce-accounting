import React, { useRef, useState } from "react";

const FileUploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["text/csv", "application/vnd.ms-excel"];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    // Add your file upload logic here
    console.log("Uploading file:", selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Upload a File</h2>
        <input
          type="file"
          accept=".csv, application/vnd.ms-excel"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => fileInputRef.current.click()}
        >
          Select File
        </button>
        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm font-medium">{selectedFile.name}</p>
            <p className="text-xs text-gray-500">{selectedFile.size} bytes</p>
          </div>
        )}
        {selectedFile && (
          <button
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUploadSection;
