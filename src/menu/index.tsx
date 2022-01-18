import React ,{FC} from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/menu.css'

const Menu : FC = () => {
  return (
    <>
    <div className='menu'>
     <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/" >FORM</NavLink>     
    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/user" >USER</NavLink>      

    </div>
    
    </>
  );
}

export default Menu;