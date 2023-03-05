import { CardHeader, Card, CardMedia } from "@mui/material";
import React from "react";

const Category = ({ category, src, altText }) => {
  return (
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
  );
};

export default Category;
