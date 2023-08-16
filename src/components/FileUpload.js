import Papa from "papaparse";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddRecordPopup } from "../slice";

const FileUpload = ({ onFileUpload, setShowPopup }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["text/csv", "application/vnd.ms-excel"];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const rows = chunk.split("\n").slice(7);
        return rows.join("\n");
      },
      complete: (results) => {
        onFileUpload(results.data);
        setData(results.data);
      },
    });
  };

  //   const handleSubmit = () => {
  //     axios
  //       .post(process.env.REACT_APP_BASE_URL, )
  //       .then((results) => {
  //         console.log(results.data);
  //       })
  //       .catch((err) => {
  //         console.log("Error", err);
  //       });
  //   };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 my-8 flex justify-between items-end text-2xl">
      <div>
        {selectedFile ? (
          <div className="mt-4 font-bold">
            <p className="text-base">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">
              {(selectedFile.size / 1000).toFixed(1)} KB
            </p>
          </div>
        ) : (
          <h2 className="font-bold mb-4">Upload a File</h2>
        )}
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(setAddRecordPopup())}
        >
          Add Record
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
