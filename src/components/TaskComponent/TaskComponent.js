import React from "react";
import { Grid, Container, Box, TextField, Button } from "@mui/material";
const TaskComponent = () => {
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            <Grid item xs={8}>
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
            <Grid item xs={4}>
              2
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TaskComponent;
