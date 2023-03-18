import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api/api";
import { Grid } from "@mui/material";
import ProductTile from "./ProductTile";
import "../pages/Browse.css";

const BrowseBody = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [posts, setPosts] = useState();

  useEffect(() => {
    api
      .listDocuments("6403d5d8bfa5e8fe29e1", "6403d600199676c85a34")
      .then((documents) => {
        setPosts(
          category === "all"
            ? documents.documents
            : documents.documents.filter((value) => value.category === category)
        );
      });
  }, [category]);

  useEffect(() => {
    api
      .listDocuments("6403d5d8bfa5e8fe29e1", "6403d600199676c85a34")
      .then((documents) => {
        setPosts(documents.documents);
      });
  }, []);

  return (
    <div>
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
              <ProductTile post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BrowseBody;
