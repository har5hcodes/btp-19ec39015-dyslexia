import {
  AppBar,
  Box,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const StudentDashboard = () => {
  return (
    <>
     <Navbar/>
      <Grid
        container
        spacing={7}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <div>
            <Button
              variant="contained"
              style={{
                maxWidth: "300px",
                maxHeight: "150px",
                minWidth: "300px",
                minHeight: "150px",
                marginRight: "100px",
              }}
            >
              Tasks to Perform
            </Button>
            <Button
              variant="contained"
              style={{
                maxWidth: "200px",
                maxHeight: "150px",
                minWidth: "300px",
                minHeight: "150px",
              }}
            >
              Your Performance Report
            </Button>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div>
            <Button
              variant="contained"
              style={{
                maxWidth: "200px",
                maxHeight: "150px",
                minWidth: "300px",
                minHeight: "150px",
                marginRight: "100px",
              }}
            >
              Chat with Educator
            </Button>
            <Button
              variant="contained"
              style={{
                maxWidth: "200px",
                maxHeight: "150px",
                minWidth: "300px",
                minHeight: "150px",
              }}
            >
              Edit your Profile
            </Button>
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default StudentDashboard;
