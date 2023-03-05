import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Grid, Box } from "@mui/material";
import "./Browse.css";
import cat from "./cat.jpg";
import { api } from "../api/api";

const Browse = () => {
  const navigate = useNavigate();

  const { allClick, setAllClick } = useState(false);
  const { clothesClick, setClothesClick } = useState(false);
  const { toysClick, setToysClick } = useState(false);
  const { booksClick, setBooksClick } = useState(false);
  const { furnitureClick, setFurnitureClick } = useState(false);
  const { safetyGearClick, setSafetyGearClick } = useState(false);
  const { otherClick, setOtherClick } = useState(false);

  const resetAllClicks = () => {
    setAllClick(false);
    setClothesClick(false);
    setToysClick(false);
    setBooksClick(false);
    setFurnitureClick(false);
    setSafetyGearClick(false);
    setOtherClick(false);
  };

  const [posts, setPosts] = useState();

  useEffect(() => {
    api
      .listDocuments("6403d5d8bfa5e8fe29e1", "6403d600199676c85a34")
      .then((documents) => {
        setPosts(documents.documents);
      });
  }, []);

  return (
    <Grid container spacing={2} columns={6}>
      <Grid item xs={1}></Grid>

      <Grid item xs={4}>
        <div>
          <Typography variant="h2">Browse</Typography>
          <div className="Categories">
            <div className="ButtonWrapper">
              <CategoryButton
                className={allClick ? "buttonClicked" : "buttonUnclicked"}
                value="All"
                onClick={() => {
                  resetAllClicks();
                  setAllClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={clothesClick ? "buttonClicked" : "buttonUnclicked"}
                value="Clothes"
                onClick={() => {
                  resetAllClicks();
                  setClothesClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={toysClick ? "buttonClicked" : "buttonUnclicked"}
                value="Toys"
                onClick={() => {
                  resetAllClicks();
                  setToysClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={booksClick ? "buttonClicked" : "buttonUnclicked"}
                value="Books"
                onClick={() => {
                  resetAllClicks();
                  setBooksClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={furnitureClick ? "buttonClicked" : "buttonUnclicked"}
                value="Furniture"
                onClick={() => {
                  resetAllClicks();
                  setFurnitureClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={
                  safetyGearClick ? "buttonClicked" : "buttonUnclicked"
                }
                value="Safety Gear"
                onClick={() => {
                  resetAllClicks();
                  setSafetyGearClick(true);
                }}
              />
            </div>
            <div className="ButtonWrapper">
              <CategoryButton
                className={otherClick ? "buttonClicked" : "buttonUnclicked"}
                value="Other"
                onClick={() => {
                  resetAllClicks();
                  setOtherClick(true);
                }}
              />
            </div>
          </div>

          {!posts?.length ? (
            <p>No posts yet!</p>
          ) : (
            <Grid container spacing={3} columns={4}>
              {posts.map((post) => (
                <Grid
                  item
                  xs={1}
                  key={post.$id}
                  onClick={() => {
                    // setSeletectedPostId(post.$id);
                    navigate("/product");
                    // navigate(`/product=${post.$id}`);
                  }}
                >
                  <Box>
                    {post.image && (
                      <img
                        className="itemImg"
                        src={api.getFilePreview(
                          "6404413ed6aa6c044fe7",
                          post.image
                        )}
                        alt={
                          api.getFileById("6404413ed6aa6c044fe7", post.image)
                            .fileName
                        }
                      />
                    )}
                    <h4 style={{ margin: "7px 0px" }}>{post.name}</h4>
                    <p style={{ margin: "0px 0px 15px 0px" }}>
                      {post.description}
                    </p>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Grid>

      <Grid item xs={1}></Grid>
    </Grid>
  );
};

function CategoryButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Browse;
