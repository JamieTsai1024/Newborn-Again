import { Box, Button, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const LandingPage = () => {
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
        <Typography variant="h1">Tiny Treads</Typography>
        <Typography variant="h4">blah blah blah text</Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "16px", my: "20px" }}
        >
          Start Browsing
        </Button>
        <IconButton
          aria-label="continue"
          size="small"
          sx={{ position: "absolute", bottom: 30 }}
        >
          <ExpandMoreIcon style={{ fontSize: "60px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LandingPage;
