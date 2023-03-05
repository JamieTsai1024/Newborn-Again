import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Category from "../components/Category";

const BrowseByCategory = () => {
  return (
    <Box
      sx={{
        background: "#DAEAF6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: "100px",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 500, py: "60px" }}>
        Browse By Category
      </Typography>
      <Grid container spacing={4} sx={{ width: "70%" }}>
        {categories.map((value, id) => (
          <Grid item xs={4} key={id}>
            <Category
              category={value.title}
              src={value.src}
              altText={value.altText}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const categories = [
  {
    title: "Clothes",
    src: "/images/baby-clothes.jpg",
    altText: "Baby clothes",
  },
  {
    title: "Toys",
    src: "/images/baby-with-toys.jpg",
    altText: "Baby playing with toys",
  },
  {
    title: "Books",
    src: "/images/baby-reading-book.jpg",
    altText: "Baby reading a book",
  },
  { title: "Furniture", src: "/images/crib.jpg", altText: "Baby crib" },
  {
    title: "Safety Gear",
    src: "/images/baby-in-car-seat.jpg",
    altText: "Baby in a car seat",
  },
  {
    title: "Other",
    src: "/images/three-pink-balloons.jpg",
    altText: "Three pink balloons",
  },
];

export default BrowseByCategory;
