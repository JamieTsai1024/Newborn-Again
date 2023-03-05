import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostPage from "./pages/AddPostPage";

const theme = createTheme({
  typography: { fontFamily: "Nunito, sans-serif" },
});

function App() {
  const scrollClickHandler = () => {
    missionStatementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const missionStatementRef = React.createRef();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onScrollClick={scrollClickHandler}
                ref={missionStatementRef}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posting" element={<AddPostPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
