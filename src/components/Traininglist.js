import React, {useState, useEffect} from "react";


export default function Traininglist(){

    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData, [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .then(data => console.log(data.content)) // testing the
    }



    return (
        <div>

        </div>
    )
}