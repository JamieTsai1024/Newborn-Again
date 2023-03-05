import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";
import { Link, Router, Route } from "react-router-dom"; 

import SignUp from "./SignUp";


import "./Login.css";

<Router><Route path="/signup" element={<SignUp />} />
</Router>


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api
        .createSession(user.email, user.password)
        .then((response) => navigate("/"));
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <section className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2 className="welcome"> Welcome </h2>

        <TextField
          sx={{marginBottom: "20px", width: "30ch"}}
          id="email"
          variant="standard"
          label="Email"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          name="email"
          autoComplete="email"
        />

       
        <TextField
          sx={{marginBottom: "20px", marginTop: "-5px"}}
          id="password"
          variant="standard"
          label="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          name="password"
          autoComplete="password"
        />

        
        <Button
          type="submit"
          disabled={!user.email || !user.password}
          sx={{
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: "#ebabbf",
            borderRadius: "20px",
            margin: "20px 5px",
            color: "white",
            ":hover": {
              bgcolor: "#89b9d3",
              color: "white"
          }}}
        >
          LogIn
        </Button>

        <Link to="../signup" className="no-account">Don't have an account? Sign Up</Link>
      </form>
    </section>
  );
};

export default Login;
