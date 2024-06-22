import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useFavContext } from './utils/Context'



const Navbar = () => {

  const { dispatch } = useFavContext()

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({type: "TOGGLE_THEME"})}>Change theme</button>
    </nav>
  )
}

export default Navbar