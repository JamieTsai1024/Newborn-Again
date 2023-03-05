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
        pb: "100px",
        pt: "50px",
      }}
      ref={ref}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ py: "60px", fontWeight: 700 }}>
          Our Mission
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "25px" }}>
          Our mission is to provide a valuable service to families looking to
          save money, reduce waste, and connect with other families in their
          community. Having children can be extremely expensive, causing a huge
          financial burden to new parents. As babies grow into toddlers, they
          quickly outgrow clothes, toys, and other products, often leading to
          wasted items. By reusing baby products, we wish to provide families
          who may not otherwise have access to the necessary baby products to
          watch their children healthily grow up.
          <br></br>
          <br></br>
          Additionally, baby products contribute to a significant amount of
          waste in landfills. This is something that can easily be handled by
          simply passing down no longer needed items. With Newborn Again, we
          wish to promote evironmental sustainability and awareness, reducing
          pollution and waste whenever possible.
          <br></br>
          <br></br>
          Finally, we wish to provide a platform for parents share tips, advice,
          and experiences related to sustainable and cost-effective parenting,
          building a warm and strong community. We hope to make an impact on
          someones life and make it just a tiny bit easier! Having
        </Typography>
      </Box>
    </Box>
  );
});

export default MissionStatement;
