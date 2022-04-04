import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  format,
  formatDistance,
  formatRelative,
  getDate,
  subDays,
} from "date-fns";
import setDate from "date-fns/setDate/index.js";

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

export default function Traininglist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then((response) => response.json())
      .then((data) => setTrainings(data.content))
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
      <ReactTable
        filterable={true}
        data={trainings}
        columns={columns}
      />
    </div>
  );
}
