import { TextField } from '@mui/material';
import React ,{FC} from 'react'
import { Filed } from '../../Models/Filed';

const UserName : FC<Filed> = ({value, handleChange, handleError ,error}) => {

  const validate = (e:React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>)=>{
   e.target.value? handleError(e.target.name, false) :handleError(e.target.name , true)
  }


  return (
    <TextField required
    style={{width:'435px'}}
    margin="normal"
    name="name"
    label="User Name"
    type="text"
    inputProps={{ maxLength: 32 }}
    onChange={handleChange}
    onBlur={validate}
    value={value|| ""}
    error={error}
    helperText={error ? 'User name is required' : ' '}
 />
  );
}

export default UserName;