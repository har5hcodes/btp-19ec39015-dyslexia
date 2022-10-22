import React from "react";
import { Grid, Container, Box, TextField, Button } from "@mui/material";
const TaskComponent = () => {
  return (
    <>
      <Container
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "140px"
        }}
      >
        <Box>
          <Grid
            container
            direction="row"
            sx={{
              width: 1000,
              height: 400,
            }}
          >
            <Grid item xs={10}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{
                      maxWidth: "500px",
                      maxHeight: "50px",
                      minWidth: "500px",
                      minHeight: "50px",
                    }}
                  />
                </Grid>
                <Grid item>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{
                      maxWidth: "500px",
                      maxHeight: "50px",
                      minWidth: "500px",
                      minHeight: "50px",
                    }}
                  />
                </Grid>
                <Grid item>
                <Button
                variant="contained"
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "50px",
                }}
              >
                Submit
              </Button> 
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={2}>
                <Grid container spacing={1} direction="row">
                  <Grid item xs={6}> <Button  variant="contained" >S</Button></Grid>   
                  <Grid item xs={6}> <Button  variant="contained" >N</Button></Grid>   
                  <Grid item xs={6}> <Button  variant="contained" >A</Button></Grid>   
                  <Grid item xs={6}> <Button  variant="contained" >W</Button></Grid>   
                  <Grid item xs={6}> <Button  variant="contained" >H</Button></Grid>   
                  <Grid item xs={6}> <Button  variant="contained" >NS</Button></Grid>   
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TaskComponent;
