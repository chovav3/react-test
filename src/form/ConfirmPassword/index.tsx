import { TextField } from '@mui/material';
import React ,{FC} from 'react'
import { Filed } from '../../Models/Filed';
import { User } from '../../Models/User';

export type ConfirmPasswordProps = Filed & Pick<User , 'password'>

const ConfirmPassword : FC<ConfirmPasswordProps> =({value, handleChange,handleError,error , password}) => {
 
  const validate = (e:React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>)=>{
    e.target.value === password ? handleError(e.target.name, false) :handleError(e.target.name, true)
   }

  return (
   <TextField required
   style={{width:'435px'}}
    margin="normal"
    name="confirmPassword"
    label="Confirm Password"
    type="password"
    onChange={handleChange}
    inputProps={{ maxLength: 32 }}
    onBlur={validate}
    value={value || ""}
    error={error}
    helperText={error ? 'Passwords did not match' : ' '}
 />
  );
}

export default ConfirmPassword;