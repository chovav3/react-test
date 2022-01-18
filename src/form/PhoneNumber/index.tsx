import { TextField } from '@mui/material';
import React ,{FC} from 'react'
import { Filed } from '../../Models/Filed';

const PhoneNumber : FC<Filed> = ({value, handleChange,handleError , error}) => {

  const validate = (e:React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>)=>{
    e.target.value? handleError(e.target.name, false) :handleError(e.target.name , true)
   }

  return (
   <TextField required
   style={{width:'435px'}}
    margin="normal"
    name="phone"
    label="Phone Number"
    type="number"
    onInput={({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const
          { value } = target,
          maxLength = value.startsWith(`0`) ? 11 : 10
      target.value = value.length === maxLength ? value.slice(0, maxLength - 1) : value
    }}
    onKeyDown={(e) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) e.preventDefault()
    }}
    onChange={handleChange}
    onBlur={validate}
    value={value || ""}
    error={error}
    helperText={error ? 'Phone number is required' : ' '}
 />
  );
}

export default PhoneNumber;