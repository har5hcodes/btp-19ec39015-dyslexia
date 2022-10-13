import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Button } from "@mui/material";
import Footer from "../components/Footer/Footer";
const TasksPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid>
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid>
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid>
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid> 
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid> 
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid> 
        <Grid xs={3} display="flex" alignItems="center" justifyContent="center"> 
          <Button variant="contained">1</Button> 
        </Grid> 
      </Grid>
      <Footer />
    </>
  );
};

export default TasksPage;
