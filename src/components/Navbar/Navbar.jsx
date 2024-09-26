import React, { useState, useRef } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Box, Button, Tooltip, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import { LocalPharmacyOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const LeftNavImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "220px", // Adjust the maximum width as needed
});

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 70,
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef();

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Left Navigation Image */}
        <Box className="left-nav" sx={{ width: { lg: 220, md: 120 } }}>
          <Link to="/">
            <LeftNavImage src="/img/Metaderma.JPEG" alt="" />
          </Link>
        </Box>
        {/* Middle Navigation */}
        <Box className="middle-nav" sx={{ width: { lg: 600, md: 450 } }}>
          <span> Metaderma </span>
        </Box>
        {/* Right Navigation (Hide on Mobile) */}
        {!isMobile && (
          <Box className="right-nav" sx={{ width: { lg: "auto" } }}>
            <div className="item">
            <SearchIcon className="tooltip" />
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <LightTooltip
                ref={tooltipRef}
                title={
                  <div>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button sx={{ color: "black", width: "100%" }}>
                        Women
                      </Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button sx={{ color: "black", width: "100%" }}>
                        Men
                      </Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button sx={{ color: "black", width: "100%" }}>
                        Kids
                      </Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button sx={{ color: "black", width: "100%" }}>
                        Shirts
                      </Button>
                    </Link>
                  </div>
                }
                open={open}
                onClose={handleTooltipClose}
                disableFocusListener
                disableTouchListener
              >
                <LocalPharmacyOutlined
                  className="tooltip-icon tooltip"
                  onClick={handleTooltipOpen}
                />
              </LightTooltip>
            </ClickAwayListener>
            <div className="cart-icon">
              <ShoppingCartIcon className="tooltip" />
              <span className="tooltip">0</span>
            </div>
            <Link>
              <PersonIcon className="tooltip" />
            </Link>
          </div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Navbar;
