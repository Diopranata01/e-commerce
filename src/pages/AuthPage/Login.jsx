import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextFieldInput } from "../../components/Form Input/TextFieldInput";
import ShapeButton from "../../components/Buttons/ShapeButton";
import { useAuth } from "../../utilities/context/AuthContext";

const theme1 = createTheme({
  palette: {
    ochre: {
      main: "#1DA8BB",
      secondary: "#83E0EC",
    },
  },
});

const Login = () => {
  const { login } = useAuth();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  console.log(formData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { username, password } = formData;

    try {
      login({username, password});
    } catch (error) {
      console.error("Login failed:", error);
    }

    // Simulate an asynchronous action (e.g., fetching data) with setTimeout
    setTimeout(() => {
      // After the action is complete, set loading state back to false
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <div>
      <Container disableGutters maxWidth="none">
        <Box
          sx={{
            bgcolor: "#fff",
            minHeight: "100vh", // Set minimum height to fill the viewport
            width: "100vw", // Set width to fill the container
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              // border: "1px solid black",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            gap={2}
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                // border: "1px solid red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px",
                }}
              >
                <img
                  src="/img/Metaderma.JPEG"
                  alt="Responsive"
                  style={{
                    width: isSmallDevice
                      ? "30%"
                      : isMediumDevice
                      ? "20%"
                      : "40%",
                    height: "auto",
                  }} // Make the image responsive
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h1>Login</h1>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "45ch" },
                  display: "flex",
                  justifyContent: "center",
                }}
                autoComplete="off"
              >
                <ThemeProvider theme={theme1}>
                  <TextFieldInput
                    props={{ text: "Username" }}
                    onChange={handleInputChange}
                    value={formData.username}
                    name="username"
                  />
                </ThemeProvider>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "45ch" },
                  display: "flex",
                  justifyContent: "center",
                }}
                autoComplete="off"
              >
                <ThemeProvider theme={theme1}>
                  <TextFieldInput
                    props={{ text: "Password" }}
                    onChange={handleInputChange}
                    value={formData.password}
                    name="password"
                  />
                </ThemeProvider>
              </Box>
              <Box sx={{ 
                // border: "1px solid red",
                paddingTop: "20px",
                paddingLeft: isSmallDevice ? "0px" : isMediumDevice? "0px" : "330px",
               }}>
                <ShapeButton props={"Login"} to={''} isLoading={loading} handleSubmit={handleSubmit}/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
