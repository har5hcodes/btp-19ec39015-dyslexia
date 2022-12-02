import {
  Typography,
  Container,
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button, 
} from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const EditProfileS = () => {
  const [classOpt, setClassOpt] = useState("");

  const handleChange = (event) => {
    setClassOpt(event.target.value);
  };
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
          minWidth="100vh"
        >
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              label="First Name"
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
              label="Last Name"
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
              label="Date of Birth"
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
            <FormControl
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Class
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={classOpt}
                onChange={handleChange}
                autoWidth
                label="Class"
              >
                <MenuItem value="lkg">LKG</MenuItem>
                <MenuItem value="ukg">UKG</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              disabled
              id="outlined-basic"
              label="Email Address"
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
            <Link to='/change-password'>Click here to change password</Link>
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

export default EditProfileS;
