import React, { ReactElement } from "react";
import { Paper, Typography } from "@mui/material";
import { Translate } from "react-redux-i18n";

function Home(): ReactElement {
  return (
    <Paper
      variant="elevation"
      elevation={3}
      sx={{ margin: "20px", padding: "20px" }}
    >
      <Typography variant="h3" gutterBottom>
        <Translate value="content.home" />
      </Typography>
    </Paper>
  );
}

export default Home;
