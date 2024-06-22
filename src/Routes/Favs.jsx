import React from "react";
import Card from "../Components/Card";
import { useFavContext } from "../Components/utils/Context";


const Favs = () => {
 const { state } = useFavContext();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {state.fav.map((dentista) => <Card item={dentista} key={dentista.id}/>)}

      </div>
    </>
  );
};

export default Favs
