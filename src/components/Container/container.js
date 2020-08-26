import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './container.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

export default function SimpleContainer() {
    const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#e6e6e6', height: '100vh',width:'1250px',marginLeft:'-346px'}}>
            <text style={{fontSize:'150px',fontWeight:'bold',marginLeft:'-291px'}}>Select Store</text>
            <div>
      <FormControl variant="filled" className={classes.formControl} style={{marginLeft:'-868px'}}>
        <InputLabel id="demo-simple-select-filled-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>San Francisco</MenuItem>
          <MenuItem value={20}>Charlotte</MenuItem>
          <MenuItem value={30}>New York</MenuItem>
          <MenuItem value={40}>Dallas</MenuItem>
          <MenuItem value={50}>Chicago</MenuItem>
          <MenuItem value={60}>Seattle</MenuItem>
          <MenuItem value={70}>Atlanta</MenuItem>
        </Select>
      </FormControl>
    </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
