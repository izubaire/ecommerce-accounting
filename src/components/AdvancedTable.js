import React, { useState } from "react";

const AdvancedTable = ({ data, itemsPerPage, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const updateRow = (e, outerIndex, key) => {
    const updatedData = [...data];
    updatedData[outerIndex][key] = e.target.value;
    console.log("Changing ", updatedData[outerIndex][key]);
    console.log("Getting Values", e.target.value);
    setData(updatedData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {Object.keys(currentData[0]).map((column) => (
                <th
                  key={column}
                  className="py-3 px-4 border-b bg-gray-200 font-semibold text-2xl text-gray-700 text-left truncate"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, outerIndex) => (
              <tr
                key={outerIndex}
                className={`border-0 border-b border-gray-300 border-solid bg-white`}
              >
                {Object.entries(row).map(([key, value], index) => (
                  <td
                    key={key}
                    className="py-4 px-11 border-b text-2xl text-center text-gray-700 truncate max-characters"
                  >
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={(e) => updateRow(e, outerIndex, key)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-between items-center text-2xl mb-5">
        <div className="mt-4">
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button> */}
        </div>
        <div className="flex justify-end items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border text-white rounded ${
              currentPage === 1
                ? "opacity-50 bg-blue-500 cursor-not-allowed"
                : "bg-blue-500"
            }`}
          >
            Previous
          </button>
          <div className="text-gray-600 px-3">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border text-white rounded ${
              currentPage === totalPages
                ? "opacity-50 bg-blue-500 cursor-not-allowed"
                : "bg-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvancedTable;

// import Papa from "papaparse";
// import React, { useState } from "react";

// const AdvanceTable = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];

//     Papa.parse(file, {
//       header: true,
//       complete: (results) => {
//         setData(results.data);
//         console.log("Actual CSV", results.data);
//       },
//       error: (error) => {
//         console.error("CSV parsing error:", error);
//       },
//     });
//   };

//   const testUpdate = (e, outerIndex, key) => {
//     const updatedData = [...data];
//     updatedData[outerIndex][key] = e.target.value;
//     console.log("Changing ", updatedData[outerIndex][key]);
//     console.log("Getting Values", e.target.value);
//     setData(updatedData);
//   };

//   const handleDataUpdate = () => {
//     setIsLoading(true);

//     // Simulating backend API call
//     setTimeout(() => {
//       // Send updated data to the backend
//       // Replace this with your actual backend API call
//       console.log("Updated data:", data);

//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />

//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         data.length > 0 && (
//           <div>
//             <table>
//               <thead>
//                 <tr>
//                   {Object.keys(data[0]).map((column) => (
//                     <th
//                       key={column}
//                       className="py-3 px-4 border-b bg-gray-200 font-semibold text-2xl text-gray-700 text-left truncate"
//                     >
//                       {column}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((row, outerIndex) => (
//                   <tr
//                     key={outerIndex}
//                     className={`border-0 border-b border-gray-300 border-solid ${
//                       outerIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
//                     }`}
//                   >
//                     {Object.entries(row).map(([key, value], index) => (
//                       <td
//                         key={key}
//                         className="py-4 px-11 border-b text-2xl text-center text-gray-700 truncate max-characters"
//                       >
//                         <input
//                           type="text"
//                           name={key}
//                           value={value}
//                           onChange={(e) => testUpdate(e, outerIndex, key)}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <button onClick={handleDataUpdate}>Save</button>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default AdvanceTable;
