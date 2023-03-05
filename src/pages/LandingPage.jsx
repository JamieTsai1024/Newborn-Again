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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Tiny Treads
        </Typography>
        <Typography variant="h4">blah blah blah text</Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "20px",
            mt: "60px",
            fontSize: "30px",
            textTransform: "none",
          }}
          onClick={() => navigate("/browse")}
        >
          Start Browsing
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
