import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export const TextFieldInput = ({ props, onChange, value, name, type, errorProps }) => {
  
  const [error, setError] = useState(false);
  const { text } = props;

  useEffect(() => {
    // Check if the initial value exists
    if (value && value.trim() !== "") {
      setError(false);
    }
    if(errorProps){
      setError(true);
    }
  }, [value]);

  
  useEffect(() => {
    // Check if errorProps exists and update error state accordingly
    setError(errorProps ? true : false);
  }, [errorProps]);

  
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue); // Pass the input value to the parent component
    if (inputValue.trim() === "") {
      setError(true); // Set error to true if the input is empty after any changes
    } else {
      setError(false);
    }
  };

  return (
    <>
      <TextField
        required
        name={name}
        error={error}
        helperText={
          error ? (errorProps ? errorProps : "This field is required") : ""}
        id="outlined-required"
        label={text ? text : "Required"}
        value={value}
        type={type? type : ''}
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
      />
    </>
  );
};
