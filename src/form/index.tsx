import React ,{FC, useState} from 'react'
import { User } from '../Models/User';
import { validateUser } from '../Models/validateUser';
import ConfirmPassword from './ConfirmPassword';
import Password from './Password';
import PhoneNumber from './PhoneNumber';
import Submit from './Submit';
import UserName from './UserName';

const Form : FC = () => {

  const [user , setUser] = useState<User>()
  const [error , setError] = useState<validateUser>()

  const handleChange =(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }

  const handleError =(name: string, validate: boolean)=>{
    setError({...error,['validate' + name]: validate})
  }


  return (
    <div style={{display: 'flex',flexDirection: 'column'}}>
    <UserName value={user?.name} handleChange={handleChange} handleError={handleError} error={error?.validatename}/>
    <PhoneNumber value={user?.phone} handleChange={handleChange} handleError={handleError} error={error?.validatephone}/>
    <Password value={user?.password} handleChange={handleChange} handleError={handleError} error={error?.validatepassword} confirmPassword={user?.confirmPassword}/>
    <ConfirmPassword value={user?.confirmPassword} handleChange={handleChange} handleError={handleError} error={error?.validateconfirmPassword} password={user?.password}/>
    <Submit error={error} user={user} handleError={handleError} />
    </div>
  );
}

export default Form;