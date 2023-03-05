import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Models } from "appwrite";
import BrowseByCategory from "./BrowseByCategory";
import LandingPage from "./LandingPage";
import Browse from "./Browse";
import MissionStatementPage from "./MissionStatement";
import { account } from "./../api/api";

const HomePage = React.forwardRef(({ onScrollClick }, ref) => {
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
    await account.deleteSession("current").then(() => navigate("/login"));

  if (!user) return <p>You aren't logged in.</p>;

  return (
    <>
      <LandingPage onScrollClick={onScrollClick} />
      <MissionStatementPage ref={ref} />
      <BrowseByCategory />
      <Browse />
    </>
  );
});

export default HomePage;
