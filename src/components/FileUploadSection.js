import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAddRecordPopup } from "../slice";
import AdvancedTable from "./AdvancedTable";
import FileUpload from "./FileUpload";
import FormikForm from "./FormikForm";

const FileUploadSection = () => {
  const [csvData, setCSVData] = useState([]);
  const showPopup = useSelector(getAddRecordPopup);

  const handleFileUpload = (data) => {
    setCSVData(data);
  };

  const handleSubmit = (data) => {
    const convertKeysToCamelCase = (obj) => {
      const result = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const camelCaseKey = key
            .split(" ")
            .map((word, index) => {
              if (index === 0 && word === "date/time") {
                return "dateTime";
              }
              return index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join("");
          result[camelCaseKey] = obj[key];
        }
      }
      return result;
    };

    const convertedData = data.map((item) => convertKeysToCamelCase(item));
    console.log(convertedData);

    axios
      .post("http://localhost:8000/upload", convertedData)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  console.log("CSV Data", csvData);

  return (
    <div>
      {showPopup && <FormikForm />}
      <FileUpload onFileUpload={handleFileUpload} />
      {csvData.length > 0 && (
        <AdvancedTable
          data={csvData}
          setData={setCSVData}
          itemsPerPage={10}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default FileUploadSection;
