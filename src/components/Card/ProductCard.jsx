import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Grade, StarHalf, StarOutline } from "@mui/icons-material";

const limitWords = (str, numWords) => {
  return str.split(" ").slice(0, numWords).join(" ");
};

const theme = createTheme({
  palette: {
    customColor: {
      main: "#1DA8BB",
      secondary: "#E6F6F5",
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
      <Link to={`/product/${props.id}`} style={{ color: "inherit" }}>
        <Box sx={{ p: 2 }}>
          <div style={{ width: "100%", height: "260px", overflow: "hidden" }}>
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
            sx={{ paddingLeft: "5px" }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {limitedName}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ paddingLeft: "5px" }}
          >
            Rp. {parseInt(props.price).toLocaleString("id-ID")}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ p: 0, display: "flex", gap: "5px", marginTop: "10px" }}
          >
            {props.rating >= 4.0 ? (
              <Grade sx={{ color: "#F9E900" }} />
            ) : props.rating <= 4.0 && props.rating >= 1 ? (
              <StarHalf sx={{ color: "#F9E900" }} />
            ) : (
              <StarOutline sx={{ color: "#F9E900" }} />
            )}
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              margin={0}
              marginTop={"2px"}
            >
              {props.rating.toFixed(1)}
              {` (${props.review_count})`}
            </Typography>
          </Stack>
        </Box>
      </Link>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <ThemeProvider theme={theme}>
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{
                bgcolor:
                  selectedChip === props.weight
                    ? "customColor.main"
                    : "customColor.secondary",
                "& .MuiChip-label": {
                  color: selectedChip === props.weight ? "white" : "black",
                },
                "&:hover": {
                  bgcolor:
                    selectedChip === props.weight
                      ? "customColor.main"
                      : "customColor.secondary",
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
                  selectedChip === props.weight * 1.5
                    ? "customColor.main"
                    : "customColor.secondary",

                "& .MuiChip-label": {
                  color:
                    selectedChip === props.weight * 1.5 ? "white" : "black",
                },
                "&:hover": {
                  bgcolor:
                    selectedChip === props.weight * 1.5
                      ? "customColor.main"
                      : "customColor.secondary",
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
                  selectedChip === props.weight * 2
                    ? "customColor.main"
                    : "customColor.secondary",

                "& .MuiChip-label": {
                  color: selectedChip === props.weight * 2 ? "white" : "black",
                },
                "&:hover": {
                  bgcolor:
                    selectedChip === props.weight * 2
                      ? "customColor.main"
                      : "customColor.secondary",
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
