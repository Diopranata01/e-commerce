import React, { useState } from "react";
import {TextField } from "@mui/material";

export const TextFieldInput = ({ props, onChange }) => {
    
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { text } = props;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    
    // Check if the input value is empty
    if (inputValue.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }

    
    // Call the onChange function passed from the parent component
    if (onChange) {
        onChange(value);
      }
  };

  return (
    <>
      <TextField
        required
        error={error}
        helperText={error ? 'This field is required' : ''} 
        id="outlined-required"
        label={text? text : 'Required'}
        value={value}
        onChange={handleChange}
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
