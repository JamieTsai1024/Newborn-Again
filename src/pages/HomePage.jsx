import React from "react";
import BrowseByCategory from "./BrowseByCategory";
import LandingPage from "./LandingPage";
import MissionStatementPage from "./MissionStatement";

const HomePage = React.forwardRef((props, ref) => {
  const { onScrollClick } = props;
  return (
    <>
      <LandingPage onScrollClick={onScrollClick} />
      <MissionStatementPage ref={ref} />
      <BrowseByCategory />
    </>
  );
});

export default HomePage;
