import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';




const Detail = ({  item, name, email, phone, website }) => {

  const [dentistas, setDentistas] = useState([]);

  const {id} = useParams();
  
  const navigate = useNavigate();

  const getDentistas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();
    setDentistas(data);
  };

  useEffect(() => {
    getDentistas();
    }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>

      <div className="card">
      <h4>Name: {dentistas.name}</h4>
      <h5>Email: {dentistas.email}</h5>
      <h5>Phone: {dentistas.phone}</h5>
      <h5>Website: {dentistas.website}</h5>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default Detail