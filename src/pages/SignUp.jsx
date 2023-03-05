import { useState } from "react";
import { account } from "../api/api";
import { ID } from "appwrite";
import { useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";
import "./Login.css";



const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await account
        .create(ID.unique(), user.email, user.password, user.name)
        .then(
          (response) => {
            console.log("response from handleSignUp create", response);
            navigate("/");
          },
          (error) => {
            console.log("errorfrom handleSignUp create", error);
          }
        );
      await account.createEmailSession(user.email, user.password).then(
        (response) => {
          console.log(
            "response from handleSignUp createEmailSession",
            response
          );
          navigate("/");
        },
        (error) => {
          console.log("error from handleSignUp createEmailSession", error);
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
<section className="login-container">
      <form className="login-box" onSubmit={handleSignUp}>
        <h2 className="welcome"> Welcome </h2>

          <TextField
            sx={{marginBottom: "20px", width: "30ch"}}
            id="name"
            variant="standard"
            label="Name"
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            name="name"
            autoComplete="name"
          />

          <TextField
            sx={{marginBottom: "20px", marginTop: "-5px"}}
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
          disabled={!user.name || !user.email || !user.password}
          sx={{
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: "#FCB9C0",
            borderRadius: "20px",
            margin: "20px 5px",
            color: "white",
            ":hover": {
              bgcolor: "#DBC6FA",
              color: "white"
          }}}
        >
          Sign Up
        </Button>
        </form>
    </section>
  );
};

export default SignUp;
