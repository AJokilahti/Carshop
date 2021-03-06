import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import {
  formatDistance, subDays
} from "date-fns";
import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import AddCar from "./AddCar.js";
import EditCar from "./EditCar.js";

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

  const saveCar = (car) => {
    fetch("https://carrestapi.herokuapp.com/cars", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err=>console.error(err))
  }

  const updateCar = (car, link) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err=>console.log(err))
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
      sortable: false,
      filterable: false,
      width: 100,
      Cell: row => <EditCar updateCar={updateCar} car={row.original}/>
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
    <div >
      <AddCar saveCar={saveCar}/>
      <ReactTable
        filterable={true}
        data={cars}
        columns={columns}
      />
    </div>
  );
}
