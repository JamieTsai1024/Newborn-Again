import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AddPostPage from "./pages/AddPostPage";
import Navbar from "./pages/navbar";

const theme = createTheme({
  typography: { fontFamily: "Nunito, sans-serif" },
});

function App() {
  return (
    <div className="Test">
      <Navbar />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductPage />} />
            {/* <Route path="/product">
            <Route path="=:postId" element={<ProductPage />} />
          </Route> */}
            <Route path="/posting" element={<AddPostPage />} />
            <Route
              path="/browse"
              element={<Browse />}
              // element={<Browse setSelectedPostId={setSelectedPostId} />}
            >
              <Route path=":category" element={<Browse />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
