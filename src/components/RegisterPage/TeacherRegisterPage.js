import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
 

const TeacherRegisterPage = () => {
  const [classOpt, setClassOpt] = useState("");

  const handleChange = (event) => {
    setClassOpt(event.target.value);
  };

  
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
          maxWidth="968px"
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <div>
              <TextField
                required
                id="outlined-basic"
                label="First Name"
                type="text"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                  marginRight: "30px",
                }}
              />
              <TextField
                required
                id="outlined-basic"
                type="text"
                label="Last Name"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField
                required
                id="outlined-basic"
                type="email"
                label="Email Address"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                  marginRight: "30px",
                }}
              />
              <TextField
                required
                id="outlined-basic"
                type="text"
                label="Phone Number"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField
                required
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                  marginRight: "30px",
                }}
              />
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
            </div>
          </Grid> 
          <Grid item xs={12}>
            <div>
              <Button
                variant="contained"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                }}
              >
                Register
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TeacherRegisterPage;
