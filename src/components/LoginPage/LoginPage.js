import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const LoginPage = () => {
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
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
          maxWidth="568px"
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <TextField
              required
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
          <Grid item xs={8}>
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
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl
              style={{
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "50px",
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                User
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={user}
                onChange={handleChange}
                autoWidth
                label="User"
              >
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControl>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
