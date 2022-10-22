import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
            <Button
              variant="contained"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              <Link to="/login">Login</Link>
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              <Link to="/student-reg">Student Register</Link>
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              <Link to="/teacher-reg">Teacher Register</Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
