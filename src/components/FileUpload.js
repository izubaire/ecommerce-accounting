import Papa from "papaparse";
import React, { useRef, useState } from "react";

const FileUpload = ({ onFileUpload }) => {
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
    console.log("file", file);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const rows = chunk.split("\n").slice(7);
        return rows.join("\n");
      },
      complete: (results) => {
        onFileUpload(results.data);
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 my-8 flex justify-between text-2xl">
      <div>
        <h2 className="font-bold mb-4">Upload a File</h2>
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
      </div>
      <div>
        {selectedFile && (
          <div className="mt-4 font-bold">
            <p className="text-base">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">
              {(selectedFile.size / 1000).toFixed(1)} KB
            </p>
          </div>
        )}
        {selectedFile && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
