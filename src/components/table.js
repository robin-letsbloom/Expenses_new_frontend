

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";

function Tables(){

  const columns =[
    {
     name: "Expense_id",
     selector: row=>row.id,
     sortable:true

    },
    {
       name: "Title",
       selector: row=>row.Title,
       sortable:true
      
      
    },
    {
      name: "ExpenseAmount",
      selector: row=>row.ExpenseAmount,
      sortable:true

    },
    {
      name: "Upload_date",
      selector: row=>row.Uploaded_date,
      sortable:true

    },
    {
      name: "Last_updated",
      selector: row=>row.lastUpdated,
      sortable:true

    }
    


  ]

  const datas=[
    {
      id:1,
      Title:"House_Rent",
      ExpenseAmount:"10000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:2,
      Title:"Furniture_Rent",
      ExpenseAmount:"1230",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:3,
      Title:"Food",
      ExpenseAmount:"6680",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:4,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:5,
      Title:"Extra",
      ExpenseAmount:"8000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:6,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:7,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:8,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:9,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:10,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:11,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:12,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:13,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:14,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:15,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },
    {
      id:16,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },{
      id:17,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },{
      id:18,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },{
      id:20,
      Title:"Transport",
      ExpenseAmount:"7000",
      Uploaded_date:"2024-08-22",
      lastUpdated:"2024-08-22"
      
    },

  ]

  const[records,setrecords]=useState(datas);
  function handleFilterbyname(event){
    const new_da=datas.filter(row=>{
      return row.Title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setrecords(new_da)
  }
  function handleFilterbyamount(event){
    const new_da=datas.filter(row=>{
      return row.ExpenseAmount.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setrecords(new_da)
  }
  function handleFilterbyid(event){
    const new_da=datas.filter(row=>{
      return row.id.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setrecords(new_da)
  }
  function handleFilterbyuploaded_date(event){
    const new_da=datas.filter(row=>{
      return row.Uploaded_date.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setrecords(new_da)
  }
  function handleFilterbyupdated_date(event){
    const new_da=datas.filter(row=>{
      return row.lastUpdated.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setrecords(new_da)
  }

  
        return(
       <div className="container mt-5">
        <div style={{display:"flex", gap:"7%"}}>
        <div className="text-end"><input type="text" placeholder="Filter By id" onChange={handleFilterbyid}/></div>
        <div className="text-end"><input type="text" placeholder="Filter By name" onChange={handleFilterbyname}/></div>
        <div className="text-end"><input type="text" placeholder="Filter By amount" onChange={handleFilterbyamount}/></div>
        <div className="text-end"><input type="text" placeholder="Filter By upload_date" onChange={handleFilterbyuploaded_date}/></div>
        <div className="text-end"><input type="text" placeholder="Filter By last_updated" onChange={handleFilterbyupdated_date}/></div>
        </div>
        <DataTable
             columns={columns}
             data={records}
             selectableRows
             fixedHeader
             pagination
             ></DataTable>
             

       </div>

        );

               
}

export default Tables;