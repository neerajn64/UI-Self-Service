import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./container.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [locations, setLocations] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "text/plain",
    };
    const url = "http://localhost:8094/vnf/home/locations";
    axios
      .get(url, { headers })
      .then((response) => {
        console.log(response.data, "Locations");
        setLocations(response.data);
      })
      .catch((error) => {
        console.log("Error here", error);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "#e6e6e6",
            height: "100vh",
            width: "1250px",
            marginLeft: "-346px",
          }}
        >
          <text
            style={{
              fontSize: "150px",
              fontWeight: "bold",
              marginLeft: "-291px",
            }}
          >
            Select Store
          </text>
          <div>
            <FormControl
              variant="filled"
              className={classes.formControl}
              style={{ marginLeft: "-868px" }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {locations.map((location) => (
                  <MenuItem value={10}>{location}</MenuItem>
                ))}
                {/* <MenuItem value={10}>San Francisco</MenuItem>
                <MenuItem value={20}>Charlotte</MenuItem>
                <MenuItem value={30}>New York</MenuItem>
                <MenuItem value={40}>Dallas</MenuItem>
                <MenuItem value={50}>Chicago</MenuItem>
                <MenuItem value={60}>Seattle</MenuItem>
                <MenuItem value={70}>Atlanta</MenuItem> */}
              </Select>
            </FormControl>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
