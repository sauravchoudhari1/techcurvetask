import { Checkbox, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import PaidIcon from '@mui/icons-material/Paid';

const DynamicField = ({title,type,placeholder,disable,options,value,onSelectChange,onChange,...props}) => {
    //type, title,placeholder,
    //in type - text,number,select ,radio,checkbox,password ,currancy
    //Scenarios -create,edit,disable
    //props - inputStyle,inputTitle,required,disable,customChangeFunction,holder,labelStyle,errorMessage,error,maxlength
 const handleChange=(e)=>{
    if(type==="select"){
        onSelectChange(e.target.value);
        console.log(e.target.value);
    }else{
        onChange(e.target.value);
    }

 }
 const handleChangeSelect = (event) => {
    onSelectChange(event.target.value )
  };
 const handleSelectChange=(selectdValue)=>{
    onSelectChange(selectdValue);
 }
    return (
    <>
    {type==="select" &&(
        
        <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">{title}</InputLabel> 
        <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          sx={{textAlign:"left"}}
          disabled={disable}
          onChange={handleChangeSelect}
        >
            {options.map((option,index)=>{
    return <MenuItem value={option}  key={index}>{option}</MenuItem>
 })}
          
        </Select>
      </FormControl>
    )}
    {type==="text" &&(
        <TextField type='text'  fullWidth
        label={title}
        value={value}
        onChange={handleChange}
        disabled={disable}
        placeholder={placeholder}>
{value}
        </TextField>
    )}
     {type==="number" &&(
        <TextField type='text'  fullWidth
        label={title}
        value={value}
        onChange={handleChange}
        disabled={disable}
        placeholder={placeholder}>
{value}
        </TextField>
    )}
     {type==="password" &&(
        <TextField type='text'  fullWidth
        label={title}
        value={value}
        onChange={handleChange}
        disabled={disable}
        placeholder={placeholder}>
{value}
        </TextField>
    )}
    {type==="currency" &&(
        <TextField type='number'  fullWidth
        label={title}
        value={value}
        
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PaidIcon />
              </InputAdornment>
            ),
          }}
        onChange={handleChange}
        disabled={disable}
        placeholder={placeholder}>
{value}
        </TextField>
    )}

{type==="radio" &&(
<FormControl>
      <FormLabel sx={{textAlign:"left"}} id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
         {options.map((option,index)=>{
    return <FormControlLabel value={option} control={<Radio />} label={option} />
 })}
      </RadioGroup>
    </FormControl>
)}

{type==="check" &&(
    <>
    <Typography sx={{textAlign:"left"}}>Check box</Typography>
    <Checkbox sx={{alignSelf:"start"}} {...title} />
    </>
)}



    </>
  )
}

export default DynamicField