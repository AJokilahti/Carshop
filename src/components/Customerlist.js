import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default function Traininglist() {
  const [customers, setCustomers] = useState([])

  useEffect(() => fetchData, []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api/customerss")
      .then((response) => response.json())
      .then((data) => setCustomers(data.content))
      .then((data) => console.log(data.content)); // testing the
  };

  const columns = [
    {
      Header: "Name",
      accessor: {lname:"lastname", fname:"firstname"},
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
        Header: "Date",
        accessor: "date",
      },
  ];

  return (
  <div>
      <ReactTable data ={customers} columns= {columns}/>
  </div>
  );
}