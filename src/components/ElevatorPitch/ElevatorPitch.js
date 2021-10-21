import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
});
function ElevatorPitch() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        margin: "0 auto",
      }}
      xs={10}
      sm={6}
      md={3}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item container direction="column" spacing={4}>
        <Grid item>
          <Typography variant="h5" align="center" gutterBottom>
            Elevator Pitch
          </Typography>
          <Typography align="center" gutterBottom>
            Write your elevator pitch here
          </Typography>
        </Grid>
        <FormControl>
          <TextField
            className={classes.field}
            variant="outlined"
            label="Write your elevator pitch here"
            multiline
            rows={4}
          />

          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ElevatorPitch;
