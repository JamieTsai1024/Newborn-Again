import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Models } from "appwrite";
import LandingPage from "./LandingPage";
import MissionStatementPage from "./MissionStatement";
import { account, getUserData } from "./../api/api";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [user, setUser] = useState<Models.Account<Models.Preferences>>();

  useEffect(() => {
    console.log("hi again");
    account
      .get()
      // getUserData()
      .then(
        (account) => setUser(account),
        (error) => {
          console.log("error in get", error);
        }
      )
      .catch((error) => navigate("/login"));
  }, []);

  const handleLogOut = async () =>
    await account.deleteSession("current").then(() => navigate("/login"));

  if (!user) return <p>You aren't logged in.</p>;

  return (
    <>
      <LandingPage />
      <MissionStatementPage />
    </>
  );
};

export default HomePage;
