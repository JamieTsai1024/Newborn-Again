import React from "react";
import BrowseHeader from "../components/BrowseHeader";
import BrowseBody from "../components/BrowseBody";
import { Grid } from "@mui/material";
import "./Browse.css";

const Browse = () => {
  return (
    <div className="browse-container">
      <Grid container spacing={2} columns={6}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <div>
            <BrowseHeader className="browse-header" />
            <BrowseBody />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Browse;
