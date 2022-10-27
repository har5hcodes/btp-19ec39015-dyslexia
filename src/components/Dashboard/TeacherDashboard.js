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
  import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <>
      <Navbar />
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
              <Link to="/taskspage">Students List</Link>
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
              Upload a Task
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
              Chatbox
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
              <Link to="/edit-profile">Edit your Profile</Link>
            </Button>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default TeacherDashboard;
