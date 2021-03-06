import React, { Component } from 'react';

import Select from 'react-select';

import { mocked_users } from '../mocks.js';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LogIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mock: (process.env.NODE_ENV === 'development'), // default to true if development
      classes: props.classes,
    };

  }

  render() {
    const { classes } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in to HelloVoterHQ
          </Typography>
          <form className={classes.form} onSubmit={(e) => { e.preventDefault(); this.props.refer.doSave(e); }} >
            {(process.env.NODE_ENV === 'development')?
            <FormControlLabel
              control={<Checkbox id="mock" name="mock" value="mock" color="primary" checked={this.state.mock} onChange={(e, c) => this.setState({mock: c})} />}
              label="DEVELOPMENT MODE"
            />
            :""}
            <ServerLiveOrMocked mock={this.state.mock} refer={this} qserver={this.props.refer.state.qserver} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
        <br />
        <center>Built with <span role="img" aria-label="Love">❤️</span> by Our Voice USA</center>
      </main>
    );
  }
}

const ServerLiveOrMocked = (props) => {

  if (props.mock) return (
    <Select
      options={mocked_users}
      placeholder="Choose a user to mock"
      onChange={(obj) => props.refer.props.refer.doSave(null, obj.value)}
    />
  );

  return (
    <div>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="domain">Server Address</InputLabel>
        <Input id="server" name="server" autoComplete="server" autoFocus defaultValue={props.qserver} />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="ack" color="primary" required />}
        label="By checking this box you acknowledge that the server to which you are connecting is not affiliated with Our Voice USA and the data you send and receive is governed by that server's terms of use."
      />
    </div>
  );
}

export default withStyles(styles)(LogIn);
