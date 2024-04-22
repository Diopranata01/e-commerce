import React, { useEffect, useState } from "react";
import Authentication from "../../api/Auth/Authentication";
import ShapeButton from "../../components/Buttons/ShapeButton";
import { TextFieldInput } from "../../components/Form Input/TextFieldInput";
import { Typography } from "@mui/material";
import { useAuth } from "../../utilities/context/AuthContext";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const [formData, setFormData] = useState({ code: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email } = useAuth();
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { code , email } = formData;

    // Send OTP to backend for verification
    try {
      const response = await Authentication.registerOtp({code, email});

      if (response.data.status) {
        // OTP verification successful
        console.log("Verification successful");
        alert("OTP verification successful");
        navigate("/");
        setError("");
        
      } else {
        // OTP verification failed
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while verifying OTP. Please try again.");
    }
  };

  useEffect(() => {
    setFormData({ ...formData, email: email });
  },[email])

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Typography variant="h6">Enter OTP</Typography>

          <TextFieldInput
            props={{ text: "OTP Code" }}
            onChange={(value) =>
              handleOtpChange({ target: { name: "code", value } })
            }
            value={formData.code}
            name="code"
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <ShapeButton
          props={"Verify"}
          to={""}
          isLoading={loading}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default VerificationPage;
