import { Box, Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { api } from "./../api/api";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  // if (!selectedPostId) return
  // const { id } = useParams();
  const postId = "64047f6bc29e840ed1a2";
  // let { postId } = useParams();
  // console.log("postId", postId);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    description: "",
    condition: "",
    location: "",
    image: "",
    category: "",
  });
  const [featuredPosts, setFeaturedPosts] = useState();

  useEffect(() => {
    if (postId) {
      api
        .getDocumentById(
          "6403d5d8bfa5e8fe29e1",
          "6403d600199676c85a34",
          postId
          //   Server.databaseID,
          //   Server.collectionID,
        )
        .then((post) => {
          setPost(post);
        });
      api
        .listDocuments("6403d5d8bfa5e8fe29e1", "6403d600199676c85a34")
        .then((documents) => {
          setFeaturedPosts(documents.documents);
        });
    } else {
      navigate("/browse");
    }
  }, [postId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Breadcrumbs>ProductPage</Breadcrumbs>
      <Box sx={{ display: "flex", width: "80%", my: "100px" }}>
        {post.image && (
          <img
            style={{ width: "30%", objectFit: "cover", borderRadius: "15px" }}
            src={api.getFilePreview("6404413ed6aa6c044fe7", post.image)}
            alt={api.getFileById("6404413ed6aa6c044fe7", post.image).fileName}
          />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <Typography
                variant="h3"
                sx={{ wordWrap: "break-word" }}
                gutterBottom
              >
                {post.name}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Item Details
              </Typography>
              <Box sx={{ display: "flex", mb: "20px" }}>
                <Box>
                  <Typography variant="h6">Location</Typography>
                  <Typography variant="h6">Condition</Typography>
                </Box>
                <Box sx={{ ml: "40px", color: "dimgray" }}>
                  <Typography variant="h6">{post.location}</Typography>
                  <Typography variant="h6">{post.condition}</Typography>
                </Box>
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                borderRadius: "15px",
                border: "solid 1px black",
                pl: "10px",
              }}
            >
              <Typography variant="h3" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", mb: "20px" }}>
                <Box>
                  <Typography variant="h6">Phone Number</Typography>
                  <Typography variant="h6">Email</Typography>
                </Box>
                <Box sx={{ ml: "40px", color: "dimgray" }}>
                  <Typography variant="h6">1234567890</Typography>
                  <Typography variant="h6">email@email.com</Typography>
                </Box>
              </Box>
            </Box> */}
          </Box>
          <Typography variant="h4" gutterBottom>
            Description
          </Typography>
          <Typography paragraph>
            {post.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ornare tincidunt nunc et efficitur. Maecenas rhoncus, mi a faucibus
            mattis, arcu arcu ornare dui, a cursus nulla nunc porta augue.
            Maecenas scelerisque mauris eget odio elementum feugiat. Vivamus
            cursus ligula arcu. Donec interdum pretium ante. Vivamus
            sollicitudin arcu at massa varius, a volutpat ante tristique.
            Integer bibendum */}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "80%", mb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          onClick={() => navigate("/browse")}
        >
          Continue Browsing
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {featuredPosts &&
            featuredPosts
              .slice(0, Math.max(4, featuredPosts.length))
              .map((post, i) => (
                <img
                  key={i}
                  src={api.getFilePreview("6404413ed6aa6c044fe7", post.image)}
                  alt={
                    api.getFileById("6404413ed6aa6c044fe7", post.image).fileName
                  }
                  style={{
                    width: "23%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              ))}
        </Box>
      </Box>
    </Box>
  );
};

// const makeImages = () => {
//   const images = [];
//   for (let i = 0; i < 4; i++) {
//     images.push(
//       <img
//         key={i}
//         src="/images/baby-clothes.jpg"
//         alt="test"
//         style={{
//           width: "23%",
//           height: "200px",
//           objectFit: "cover",
//           borderRadius: "15px",
//         }}
//       />
//     );
//   }
//   return images;
// };

export default ProductPage;
