import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
//import Paper from "@mui/material/Paper";


const styles = {
  card: {
    minWidth: 275,
    display: "inline-block"
  }
};

const YourCardOne = () => {
  return (
    <Card variant="outlined" style={{ height: "200%" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Graph One
        </Typography>
        <Typography variant="h5" component="h2">
          Sarah Doria
        </Typography>
        <Typography color="textSecondary">Position</Typography>
        <Typography variant="body2" component="p">
          Company
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

const YourCardTwo = () => {
  return (
    <Card variant="outlined" style={{ height: "100%" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Graph Two
        </Typography>
        <Typography variant="h5" component="h2">
          Sarah Doria
        </Typography>
        <Typography color="textSecondary">Position</Typography>
        <Typography variant="body2" component="p">
          Company
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
     );
    };
    const YourCardThree = () => {
        return (
          <Card variant="outlined" style={{ height: "100%" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Graph Three
              </Typography>
              <Typography variant="h5" component="h2">
                Sarah Doria
              </Typography>
              <Typography color="textSecondary">Position</Typography>
              <Typography variant="body2" component="p">
                Company
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        );
      };
      export default function Cards() {
        return (
          <div>
            <Container>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={48}>
                  <Grid container spacing={25}>
                    <Grid item xs={12}>
                      <YourCardOne />
                    </Grid>
                    <Grid item xs={20} >
                      <YourCardTwo />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={20}>
                  <YourCardThree />
                </Grid>
      
              </Grid>
            </Container>
          </div>
        );
      }      