import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextFieldInput } from "../../components/Form Input/TextFieldInput";
import ShapeButton from "../../components/Buttons/ShapeButton";
import Authentication from "../../api/Auth/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utilities/context/AuthContext";

const theme1 = createTheme({
  palette: {
    ochre: {
      main: "#1DA8BB",
      secondary: "#83E0EC",
    },
  },
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { setEmailValue } = useAuth();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    otpPage: "http://localhost:3000/otpRegis",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { username, password, confirm_password, otpPage } = formData;

    console.log("masuk");
    if (password !== confirm_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // Send OTP to backend for verification
    console.log(formData);
    try {
      const response = await Authentication.register({
        email: username,
        password: password,
        password_confirm: confirm_password,
        verification_page_url: otpPage,
      });
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      console.log(response);

      setEmailValue(username);
      navigate("/otpRegis");

    } catch (error) {

      if (error.response.status === 400) {
        alert("Email already exists");
      }
      else if (error.response.status === 409) {
        alert("Invalid OTP");
      }
      console.error(error.response);
    }

    // Simulate an asynchronous action (e.g., fetching data) with setTimeout
    setTimeout(() => {
      // After the action is complete, set loading state back to false
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  };

  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [formData]);

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
                      : "100%",
                    height: "auto",
                    padding: isSmallDevice || isMediumDevice ? "30px" : "200px",
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
              <h1>Register</h1>
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
                    onChange={(value) =>
                      handleInputChange({ target: { name: "username", value } })
                    }
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
                    onChange={(value) =>
                      handleInputChange({ target: { name: "password", value } })
                    }
                    value={formData.password}
                    type={"password"}
                    name="password"
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
                    props={{ text: "Confirm Password" }}
                    onChange={(value) =>
                      handleInputChange({
                        target: { name: "confirm_password", value },
                      })
                    }
                    value={formData.confirm_password}
                    type={"password"}
                    name="confirm_password"
                    errorProps={error}
                  />
                </ThemeProvider>
              </Box>
              <Box
                sx={{
                  // border: "1px solid red",
                  display: "flex",
                  gap: "45px",
                  paddingTop: "20px",
                  justifyContent: "space-evenly",
                  paddingInline: isSmallDevice
                    ? "0px"
                    : isMediumDevice
                    ? "120px"
                    : "0px",
                }}
              >
                <Typography>
                  Have an account?{" "}
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#1DA8BB" }}
                  >
                    Log in
                  </Link>
                </Typography>
                <ShapeButton
                  props={"Sign Up"}
                  to={""}
                  isLoading={loading}
                  handleSubmit={handleSubmit}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterPage;
