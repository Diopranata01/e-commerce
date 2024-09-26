import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const limitWords = (str, numWords) => {
  return str.split(" ").slice(0, numWords).join(" ");
};

const theme = createTheme({
  palette: {
    customColor: {
      main: "#1DA8BB", 
      secondary : "#E6F6F5"
    },
  },
});

export const ProductCard = ({ props }) => {
  const limitedName = limitWords(props.name, 3);
  const [selectedChip, setSelectedChip] = useState(props.weight);
  
  const handleChipClick = (chipValue) => {
    setSelectedChip(chipValue === selectedChip ? null : chipValue);
  };
  
  return (
    <Card variant="elevation" sx={{ maxWidth: 270 }}>
      <Box sx={{ p: 2 }}>
        <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
          <img
            src={`${props.image}`}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h6" component="div">
            {limitedName}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <AttachMoneyIcon />
          {props.price}
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>

        <ThemeProvider theme={theme}>
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{
                bgcolor: selectedChip === props.weight ? "customColor.main" : "customColor.secondary",
                "& .MuiChip-label": {
                  color: selectedChip === props.weight ? "white" : "black",
                },
                "& .MuiChip-clickable": {
                  bgcolor: selectedChip === props.weight ? "customColor.main" : "customColor.secondary",
                },
              }}
              label={`${props.weight}`}
              size="small"
              clickable
              onClick={() => handleChipClick(props.weight)}
            />
            <Chip
              sx={{
                bgcolor:
                  selectedChip === props.weight * 1.5 ? "customColor.main" : "customColor.secondary",

                "& .MuiChip-label": {
                  color:
                    selectedChip === props.weight * 1.5 ? "white" : "black",
                },
              }}
              label={`${props.weight * 1.5}`}
              size="small"
              clickable
              onClick={() => handleChipClick(props.weight * 1.5)}
            />
            <Chip
              sx={{
                bgcolor:
                  selectedChip === props.weight * 2 ? "customColor.main" : "customColor.secondary",

                "& .MuiChip-label": {
                  color:
                    selectedChip === props.weight * 2 ? "white" : "black",
                },
              }}
              label={`${props.weight * 2}`}
              size="small"
              clickable
              onClick={() => handleChipClick(props.weight * 2)}
            />
            <Typography variant="body2">Gram</Typography>
          </Stack>
        </ThemeProvider>
      </Box>
    </Card>
  );
};
