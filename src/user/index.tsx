import React ,{FC, useContext} from 'react'
import { UserContext } from '../context';

const User : FC = () => {

  const { user} = useContext(UserContext)

  return (
    <>
   <div> 
     <h1 style={{display: 'inline'}}>User Name :  </h1>
     <span>{user?.name}</span>
   </div>
   <div> 
     <h1 style={{display: 'inline'}}>Phone Number : </h1> 
     <span>{user?.phone}</span>
  </div>
    </>
  );
}

export default User;