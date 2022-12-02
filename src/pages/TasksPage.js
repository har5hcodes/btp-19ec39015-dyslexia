import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Button, Card, CardActions, CardContent,  Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";  
import { Link } from "react-router-dom";
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
          <Card sx={{ maxWidth: 245 }}>
            <CardContent>
              <Typography variant="h5">
                Task Name
              </Typography>
            </CardContent>
            <CardActions>
              <Button  size="small"> <Link to="/taskpage">Perform Task</Link></Button>
            </CardActions>
          </Card>
        </Grid> 
      </Grid>
      <Footer />
    </>
  );
};

export default TasksPage;
