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
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@material-ui/core/Button";
import { red } from "@mui/material/colors";

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

export default function Traininglist() {
  const [cars, setCars] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
  };

  const deleteCar = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => fetchData())
    .catch(err=>console.error(err))
  }

  
  const columns = [
    {
      Header: "Brand",
      accessor: "brand",
    },
    {
      Header: "Model",
      accessor: "model",
    },
    {
      Header: "Color",
      accessor: "color",
    },
    {
      Header: "Fuel",
      accessor: "fuel",
    },
    {
      Header: "Year",
      accessor: "year",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      accessor: '_links.self.href',
      Cell: row => <Button onClick={() => deleteCar(row.value)}><DeleteIcon sx={{ color: red[500]}}/></Button>,
      sortable: false,
      filterable: false,
      width: 100
    }
    
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
