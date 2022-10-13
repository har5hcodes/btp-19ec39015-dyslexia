import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const StudentRegisterPage = () => {
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
                type="text"
                label="Date of Birth"
                variant="outlined"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                  marginRight: "30px",
                }}
              />
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
                label="Joining Code"
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

export default StudentRegisterPage;
