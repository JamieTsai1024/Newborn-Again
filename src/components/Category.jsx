import { CardHeader, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Category.css";

const Category = ({ category, src, altText, url }) => {
  return (
    <Link to={url}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: "5%",
          borderRadius: "16px",
        }}
      >
        <CardHeader title={category} />
        <CardMedia
          component="img"
          image={window.location.origin + src}
          alt={altText}
          sx={{
            height: "auto",
            width: "90%",
            objectFit: "cover",
            aspectRatio: "1/1",
            borderRadius: "10px",
          }}
        />
      </Card>
    </Link>
  );
};

export default Category;
