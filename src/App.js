import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
