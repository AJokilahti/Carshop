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
  const [cars, setCars] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
  };

  
  const columns = [
    {
      Header: "Brand",
      accessor: "brand",
    },
    {
      Header: "Model",
      accessor: "model",
    },
    
  ];

  return (
    <div>
      <ReactTable
        filterable={true}
        data={cars}
        columns={columns}
      />
    </div>
  );
}
