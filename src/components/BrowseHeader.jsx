import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../pages/Browse.css";

const BrowseHeader = () => {
  const [currentHeader, setCurrentHeader] = useState("all");

  return (
      <Grid item xs={1}></Grid>

      <Grid item xs={4}>
        <div>
          <Typography variant="h2">Browse</Typography>
          <div className="Categories">
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "all" ? "buttonClicked" : "buttonUnclicked"
                }
                value="All"
                onClick={() => {
                  setCurrentHeader("all");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "clothes"
                    ? "buttonClicked"
                    : "buttonUnclicked"
                }
                value="Clothes"
                onClick={() => {
                  setCurrentHeader("clothes");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "toys" ? "buttonClicked" : "buttonUnclicked"
                }
                value="Toys"
                onClick={() => {
                  setCurrentHeader("toys");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "books"
                    ? "buttonClicked"
                    : "buttonUnclicked"
                }
                value="Books"
                onClick={() => {
                  setCurrentHeader("books");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "furniture"
                    ? "buttonClicked"
                    : "buttonUnclicked"
                }
                value="Furniture"
                onClick={() => {
                  setCurrentHeader("furniture");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "safety"
                    ? "buttonClicked"
                    : "buttonUnclicked"
                }
                value="Safety Gear"
                onClick={() => {
                  setCurrentHeader("safetyGear");
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  currentHeader === "other"
                    ? "buttonClicked"
                    : "buttonUnclicked"
                }
                value="Other"
                onClick={() => {
                  setCurrentHeader("other");
                }}
              />
            </div>
          </div>
        </div>
      </Grid>

      <Grid item xs={1}></Grid>
  );
};

function CategoryButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default BrowseHeader;
