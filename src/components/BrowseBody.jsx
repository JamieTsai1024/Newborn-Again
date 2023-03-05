import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api/api";
import { Grid, Box } from "@mui/material";
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
          documents.documents.filter((value) => value.type === category)
        );
      });
  }, [category]);

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
              <Box>
                {post.image && (
                  <img
                    className="itemImg"
                    src={api.getFilePreview("6404413ed6aa6c044fe7", post.image)}
                    alt={
                      api.getFileById("6404413ed6aa6c044fe7", post.image)
                        .fileName
                    }
                  />
                )}
                <h4 style={{ margin: "7px 0px" }}>{post.name}</h4>
                <p style={{ margin: "0px 0px 15px 0px" }}>{post.description}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BrowseBody;
