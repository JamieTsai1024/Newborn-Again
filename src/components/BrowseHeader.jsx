import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

import "../pages/Browse.css";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const [currentHeader, setCurrentHeader] = useState("all");

  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: 500 }}>
        Browse
      </Typography>
      <div className="Categories">
        <div className="ButtonWrapper">
          <CategoryButton
            className={
              currentHeader === "all" ? "buttonClicked" : "buttonUnclicked"
            }
            value="All"
            onClick={() => {
              setCurrentHeader("all");
              navigate("all");
            }}
          />
        </div>
        <div className="ButtonWrapper">
          <CategoryButton
            className={
              currentHeader === "clothing" ? "buttonClicked" : "buttonUnclicked"
            }
            value="Clothing"
            onClick={() => {
              setCurrentHeader("clothing");
              navigate("clothing");
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
              navigate("toys");
            }}
          />
        </div>
        <div className="ButtonWrapper">
          <CategoryButton
            className={
              currentHeader === "books" ? "buttonClicked" : "buttonUnclicked"
            }
            value="Books"
            onClick={() => {
              setCurrentHeader("books");
              navigate("books");
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
              navigate("furniture");
            }}
          />
        </div>
        <div className="ButtonWrapper">
          <CategoryButton
            className={
              currentHeader === "safety" ? "buttonClicked" : "buttonUnclicked"
            }
            value="Safety Gear"
            onClick={() => {
              setCurrentHeader("safetyGear");
              navigate("safety-gear");
            }}
          />
        </div>
        <div className="ButtonWrapper">
          <CategoryButton
            className={
              currentHeader === "other" ? "buttonClicked" : "buttonUnclicked"
            }
            value="Other"
            onClick={() => {
              setCurrentHeader("other");
              navigate("other");
            }}
          />
        </div>
      </div>
    </>
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
