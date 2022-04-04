import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


export default function Traininglist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData, []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then((response) => response.json())
      .then((data) => setTrainings(data.content))
      .then((data) => console.log(data.content)); // testing the
  };

  const columns = [
    {
      Header: "Activity",
      accessor: "activity",
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
      <ReactTable filterable={true} data ={trainings} columns= {columns}/>
  </div>
  );
}
