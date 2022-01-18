import { Button } from '@mui/material';
import React ,{FC, useContext, useState} from 'react'
import { UserContext } from '../../context';
import { User } from '../../Models/User';
import { validateUser } from '../../Models/validateUser';
import Loader from '../loader';

export interface SubmitProps   {
  user : User
  error: validateUser
  handleError: (name:string,validate: boolean)=> void
} 

const Submit : FC<SubmitProps> = ({handleError,user,error}) => {

const [showLoader , setShowLoader] = useState<boolean>(false)
const {save} = useContext(UserContext)

const validate = ()=>{
   if(user.password === user.confirmPassword){
    handleError('confirmPassword', false)
     return true
   }else{
    handleError('confirmPassword' , true)
     return false
   }
}

const handleSubmit = async ()=> {
  if(validate()){
    try {
      setShowLoader(true)
     const res = await save(user)
     if(res){
      setShowLoader(false)
     }
    } catch (error) {
    console.error(error)
    }
  }
}

  return (<>
    <Button variant="outlined" style={{width:'100px'}}
   disabled={error == undefined || Object.entries(error).length < 4 || Object.entries(error).some(i=>i[1])} 
   onClick={handleSubmit}>Submit</Button>
   <Loader show={showLoader}/>
   </>
  );
}

export default Submit;

