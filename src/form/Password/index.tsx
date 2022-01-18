import { TextField } from '@mui/material';
import React ,{FC} from 'react'
import { Filed } from '../../Models/Filed';
import { User } from '../../Models/User';

export type PasswordProps = Filed & Pick<User , 'confirmPassword'>


const Password : FC<PasswordProps> = ({value, handleChange, handleError, error,confirmPassword}) => {

const validate = (e:React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>)=>{
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(e.target.value == "" || e.target.value.length < 6 || !e.target.value.match('[A-Z]') ||!format.test(e.target.value) ){
    handleError(e.target.name, true)
  }else{
    handleError(e.target.name, false)
  }
}

  return (
   <TextField required
   style={{width:'435px'}}
    margin="normal"
    name="password"
    label="Password"
    type="password"
    onChange={handleChange}
    inputProps={{ maxLength: 32 }}
    onBlur={validate}
    value={value || ""}
    error={error}
    helperText={error ? 'Password should includes 6-12 chars uppercase letter and special char' : ' '}
 />
  );
}

export default Password;