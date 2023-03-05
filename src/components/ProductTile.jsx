import React from "react";
import { api } from "../api/api";
import { Box, Card, CardMedia } from "@mui/material";
import "../pages/Browse.css";

const ProductTile = ({ post }) => {
  return (
    <Box>
      {post.image && (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pb: "5%",
            borderRadius: "16px",
            height: "auto",
          }}
        >
          <CardMedia
            component="img"
            src={api.getFilePreview("6404413ed6aa6c044fe7", post.image)}
            alt={api.getFileById("6404413ed6aa6c044fe7", post.image).fileName}
            sx={{
              height: "auto",
              width: "90%",
              objectFit: "cover",
              aspectRatio: "1/1",
              borderRadius: "5px",
            }}
          />
        </Card>
      )}
      <h4 style={{ margin: "7px 0px" }}>{post.name}</h4>
      <p style={{ margin: "0px 0px 15px 0px" }}>{post.description}</p>
    </Box>
  );
};

export default ProductTile;
