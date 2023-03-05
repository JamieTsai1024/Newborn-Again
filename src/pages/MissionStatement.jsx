import { Box, Typography } from "@mui/material";
import React from "react";

const MissionStatement = React.forwardRef((props, ref) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#E8DFF5",
        pb: "60px",
      }}
      ref={ref}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ py: "60px", fontWeight: 500 }}>
          Our Mission
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ornare tincidunt nunc et efficitur. Maecenas rhoncus, mi a faucibus
          mattis, arcu arcu ornare dui, a cursus nulla nunc porta augue.
          Maecenas scelerisque mauris eget odio elementum feugiat. Vivamus
          cursus ligula arcu. Donec interdum pretium ante. Vivamus sollicitudin
          arcu at massa varius, a volutpat ante tristique. Integer bibendum
          tristique orci laoreet vehicula. Nunc quis porttitor lacus. Praesent
          luctus orci ipsum, id vestibulum turpis rutrum varius. Nam pulvinar
          tristique viverra. Etiam finibus massa eget erat gravida, vel
          imperdiet ipsum eleifend. Curabitur dictum vitae ipsum ac lobortis.
          Cras et eleifend ante, id pulvinar ipsum. Curabitur velit purus,
          consectetur vitae faucibus non, maximus sit amet lorem.
        </Typography>
      </Box>
    </Box>
  );
});

export default MissionStatement;
