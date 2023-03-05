import React from "react";
import BrowseHeader from "../components/BrowseHeader";
import BrowseBody from "../components/BrowseBody";
import { Grid } from "@mui/material";

const Browse = () => {
  return (
    <Grid container spacing={2} columns={6}>
      <BrowseHeader />
      <BrowseBody />
    </Grid>
  );
};

export default Browse;
