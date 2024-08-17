import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../components/UserContext";
import { Button, TextField, Typography, Container, Alert } from "@mui/material";
import { styled } from "@mui/system";
import Cookies from "js-cookie";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailure, setLoginFailure] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { login } = useUser();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (response.status >= 200 && response.status < 300) {
        const { ID, accessToken, refreshToken } = response.data;
        Cookies.set("ID", ID);
        Cookies.set("role", "customer");
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);
        setLoginFailure(false);
        setLoginSuccess(true);
        login(ID);

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        setLoginFailure(true);
        setLoginSuccess(false);
      }
    } catch (error) {
      setLoginFailure(true);
      setLoginSuccess(false);
    }
  };

  const handleFocus = () => {
    setLoginFailure(false);
    setLoginSuccess(false);
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form noValidate sx={{ width: "100%", mt: 1 }} onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFocus}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handleFocus}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        {loginFailure && (
          <Alert
            severity="error"
            // ...
          >
            Username or Password incorrect
          </Alert>
        )}
        {loginSuccess && (
          <Alert
            severity="success"
            // ...
          >
            Login Successful!
          </Alert>
        )}
      </form>
      <Typography variant="body1">
        If you don't have an account{" "}
        <Link to="/register" style={{ color: "#007BFF" }}>
          register here
        </Link>
        .
      </Typography>
    </StyledContainer>
  );
};

export default Login;
