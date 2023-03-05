import { createTheme, ThemeProvider, Link, Typography } from "@mui/material";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AddPostPage from "./pages/AddPostPage";

const theme = createTheme({
  typography: { fontFamily: "Nunito, sans-serif" },
});

function App() {
  return (
    <div className="Test">
        <div className="bwub">
          <Typography className="siteName" variant="h5">Newborn Again</Typography>
          <div className="nav">
            <Link href="/" variant="h6" className="NavItem">
              Home
            </Link >
            <Link href="/browse" variant="h6"  className="NavItem">
              Browse
            </Link >
            <Link variant="h6" className="NavItem">
              Donate
            </Link>
            <Link href="/login" variant="h6" className="NavItem">
              Login
            </Link >
          </div>
          
          
        </div>

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/posting" element={<AddPostPage />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
