import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Models } from "appwrite";
import BrowseByCategory from "./BrowseByCategory";
import LandingPage from "./LandingPage";
import MissionStatementPage from "./MissionStatement";
import { api } from "./../api/api";

const HomePage = () => {
  const scrollClickHandler = () => {
    missionStatementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const missionStatementRef = React.createRef();
  const navigate = useNavigate();
  // const { onScrollClick } = props;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [user, setUser] = useState<Models.Account<Models.Preferences>>();

  // TODO: comment to not kick out unlogged in users - do we want unauthed users?
  // useEffect(() => {
  //   console.log("hi again");
  //   account
  //     .get()
  //     .then((account) => setUser(account))
  //     .catch((error) => navigate("/login"));
  // }, []);

  const handleLogOut = async () =>
    await api
      .provider()
      .account.deleteSession("current")
      .then(() => navigate("/login"));

  if (!user) return <p>You aren't logged in.</p>;

  return (
    <>
      <LandingPage onScrollClick={scrollClickHandler} />
      <MissionStatementPage ref={missionStatementRef} />
      <BrowseByCategory />
    </>
  );
};

export default HomePage;
