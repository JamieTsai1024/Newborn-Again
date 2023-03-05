import { Box, Button, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useNavigate } from "react-router";

const LandingPage = ({ onScrollClick }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/images/test.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Newborn Again
        </Typography>
        <Typography variant="h4" sx={{ width: "70%", textAlign: "center" }}>
          A warm community for past, current, and future families to support
          each other through parenthood with baby items.
        </Typography>
        <Button
          href="/browse"
          variant="contained"
          size="large"
          sx={{
            borderRadius: "10px",
            mt: "50px",
            fontSize: "25px",
            textTransform: "none",
            backgroundColor: "#E3E9FC",
            border: "solid 2px black",
            color: "black",
            boxShadow: "none",
            ":hover": {
              bgcolor: "#A8D0E5",
              border: "solid 2px #A8D0E5",
              color: "white",
              boxShadow: "none",
            },
          }}
          onClick={() => navigate("/browse")}
        >
          START BROWSING
        </Button>
        <IconButton
          aria-label="continue"
          size="small"
          sx={{ position: "absolute", bottom: 30 }}
          onClick={onScrollClick}
        >
          <ExpandMoreIcon style={{ fontSize: "60px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LandingPage;
