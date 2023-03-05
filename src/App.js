import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import BrowseByCategory from "./pages/BrowseByCategory";
import LandingPage from "./pages/LandingPage";
import MissionStatement from "./pages/MissionStatement";
import React from "react";

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
      <div className="App">
        <LandingPage onScrollClick={scrollClickHandler} />
        <MissionStatement ref={missionStatementRef} />
        <BrowseByCategory />
      </div>
    </ThemeProvider>
  );
}

export default App;
