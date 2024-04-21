import React, { useState } from "react";
import {TextField } from "@mui/material";

export const TextFieldInput = ({ props, onChange, value, name }) => {
    
  // const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { text } = props;

  console.log(value)

  return (
    <>
      <TextField
        required
        name={name}
        error={error}
        helperText={error ? 'This field is required' : ''} 
        id="outlined-required"
        label={text? text : 'Required'}
        value={value}
        onChange={onChange}
        InputLabelProps={{
          style: { color: "black" },
        }}
        sx={{
          color: "ochre.main",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "ochre.main", // Set the border color
            },
            "&:hover fieldset": {
              borderColor: "ochre.secondary", // Set the border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "ochre.secondary", // Set the border color when focused
            },
          },
        }}
        // defaultValue="Password"
      />
    </>
  );
};
