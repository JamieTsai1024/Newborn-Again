import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MissionStatement from "./pages/MissionStatement";
import Browse from "./pages/Browse";


function App() {
  return (
    <>
      <LandingPage />
      <MissionStatement />
      <Browse/>
    </>
  );
}

export default App;
