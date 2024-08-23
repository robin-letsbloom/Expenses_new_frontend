import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

function Tables() {
  const [records, setRecords] = useState([]); 

  
  useEffect(() => {
    fetch('http://localhost:8081/api/expenses')  
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched Data:", data); 
        setRecords(data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    {
      name: "Expense ID",
      selector: row => row.id,  
      sortable: true
    },
    {
      name: "Title",
      selector: row => row.title,  
      sortable: true
    },
    {
      name: "Expense Amount",
      selector: row => row.amount,  
      sortable: true
    },
    {
      name: "Upload Date",
      selector: row => row.createdAt,  
      sortable: true
    },
    {
      name: "Last Updated",
      selector: row => row.updatedAt,  
      sortable: true
    }
  ];
  function handleFilterByName(event){
    const newData = records.filter(row => {
      return row.title && row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  function handleFilterByAmount(event){
    const newData = records.filter(row => {
      return row.expenseAmount && row.expenseAmount.toString().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  function handleFilterById(event) {
    const newData = records.filter(row => {
      return row.id && row.id.toString().toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  function handleFilterByUploadedDate(event) {
    const newData = records.filter(row => {
      return row.Uploaded_date && row.Uploaded_date.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  function handleFilterByUpdatedDate(event) {
    const newData = records.filter(row => {
      return row.lastUpdated && row.lastUpdated.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  

  
  return (
    <div className="container mt-5">
      <div style={{ display: "flex", gap: "7%" }}>
        <div className="text-end">
          <input type="text" placeholder="Filter By id" onChange={handleFilterById} />
        </div>
        <div className="text-end">
          <input type="text" placeholder="Filter By name" onChange={handleFilterByName} />
        </div>
        <div className="text-end">
          <input type="text" placeholder="Filter By amount" onChange={handleFilterByAmount} />
        </div>
        <div className="text-end">
          <input type="text" placeholder="Filter By upload_date" onChange={handleFilterByUploadedDate} />
        </div>
        <div className="text-end">
          <input type="text" placeholder="Filter By last_updated" onChange={handleFilterByUpdatedDate} />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
      />
    </div>
  );
}

export default Tables;
