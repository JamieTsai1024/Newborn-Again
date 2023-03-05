import React from "react";
import { Link, Typography } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Typography className="siteName" variant="h5">
        Newborn Again
      </Typography>
      <div className="nav">
        <Link href="/" variant="h6" className="NavItem">
          Home
        </Link>
        <Link href="/browse" variant="h6" className="NavItem">
          Browse
        </Link>
        <Link href="/posting" variant="h6" className="NavItem">
          Post
        </Link>
        <Link href="/login" variant="h6" className="NavItem">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
