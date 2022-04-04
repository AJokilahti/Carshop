import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default function Traininglist() {
  const [customers, setCustomers] = useState([])

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data.content))
  };

  const columns = [
    {
      Header: "Lastname",
      accessor: "lastname",
    },
    {
        Header: "Firstname",
        accessor: "firstname",
      },
    {
      Header: "email",
      accessor: "email",
    },
  ];

  return (
  <div>
      <ReactTable filterable={true} data ={customers} columns= {columns}/>
  </div>
  );
}