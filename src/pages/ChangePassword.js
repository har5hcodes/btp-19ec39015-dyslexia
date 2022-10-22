import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Button, TextField, Container } from "@mui/material";


const ChangePassword = () => {
  return (
    <>
      <Navbar />
      <Container
        style={{
          marginTop: "100px", 
        }}
      >
        <Grid
          spacing={3}
          container
          direction="column"
          alignItems="center"
          justifyContent="center" 
        >
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              type="password"
              label="Old Password"
              variant="outlined"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px", 
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              type="password"
              label="New Password"
              variant="outlined"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px", 
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              type="password"
              label="Confirm Password"
              variant="outlined"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px", 
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ChangePassword;
