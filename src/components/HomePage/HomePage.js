import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const HomePage = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid
          container
          maxWidth="568px"
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Button variant="contained" style={{maxWidth: '300px', maxHeight: '50px', minWidth: '300px', minHeight: '50px'}} >Login</Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" style={{maxWidth: '300px', maxHeight: '50px', minWidth: '300px', minHeight: '50px'}}>Student Register</Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" style={{maxWidth: '300px', maxHeight: '50px', minWidth: '300px', minHeight: '50px'}}>Teacher Register</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
