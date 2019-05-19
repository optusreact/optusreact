import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function UsageBreakDown(props) {
  const { classes, usage } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <h2 className="mb-60">Usage Details</h2>
                <Typography gutterBottom variant="subtitle1">
                  {usage.usageName}
                </Typography>
                {usage.dataOffer && (
                	<Typography gutterBottom>{usage.dataOffer}</Typography>
                	)} 
              </Grid>
            </Grid>
            {usage.usedVal && (
              <Grid item>
                <Typography variant="subtitle1">
                  {usage.usedVal}
                  <Icon className={classes.rightIcon}>send</Icon>
                </Typography>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1">
                    {usage.usedOf}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        {usage.completedVal && usage.completedVal !== 'UN' && (
          <Grid item>
            <LinearProgress variant="determinate" value={parseInt(usage.completedVal)} />
          </Grid>
        )}
      </Paper>
    </div>
  );
}

UsageBreakDown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsageBreakDown);
