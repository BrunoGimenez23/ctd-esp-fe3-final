import React from "react";
import { Link } from "react-router-dom";

import { useFavContext } from "./utils/Context";


const Card = ({  item, name, username, id }) => {

  const { dispatch } = useFavContext()


  return (
    <div className="card">
       
       
        <Link to={"/Detail/" + item.id}>
        {<h4>Name: {item.name}</h4>}
        </Link>
        {<h5>Username: {item.username}</h5>}
        {<p>{item.id}</p>}
 
        <button onClick={() => dispatch({type: "ADD_FAV", payload: item})} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
