import React, { useState } from "react";
import AdvancedTable from "./AdvancedTable";
import FileUpload from "./FileUpload";

const FileUploadSection = () => {
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = (data) => {
    setCSVData(data);
  };

  console.log("CSV Data", csvData);

  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
      {csvData.length > 0 && (
        <AdvancedTable data={csvData} setData={setCSVData} itemsPerPage={10} />
      )}
    </div>
  );
};

export default FileUploadSection;
