import React, { useContext, useState } from "react";
import logo from "../../images/Group1329.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";
import { UserContext } from "../../App";
import { Link, useParams } from "react-router-dom";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Registrations from "../Registrations/Registrations";

const Register = () => {
  const handleRegistration = () => {
    const newRegistration = { ...loggedInUser, ...selectedDate };
    fetch("https://localhost:5000/addRegistration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRegistration),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { name } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({ startDate: new Date() });

  const handleDateChange = (date) => {
    const newDates = { ...selectedDate };
    newDates.startDate = date;
    setSelectedDate(newDates);
  };
  // const [selectedDate, setSelectedDate] = useState(null);
  const styles = {
    padding: "10px 10px",
    width: "300px",
    border: "none",
    marginBottom: "20px",
    backgroundColor: "whiteSmoke",
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          alt=""
          src={logo}
          width="200px"
          height="100px"
          className="d-inline-block align-top"
        />
        <br />
      </div>
      <div
        style={{
          border: "1px solid gray",
          width: "600px",
          height: "450px",
          textAlign: "left",
          margin: "auto",
          padding: "30px",
        }}
      >
        <h3>Register as a volunteer</h3>
        <form style={{ textAlign: "center" }} action="">
          <input
            style={styles}
            type="text"
            value={loggedInUser.name}
            required
            name="name"
            id=""
          />
          <br />
          <input
            style={styles}
            type="text"
            value={loggedInUser.email}
            required
            name="email"
            id=""
          />
          <br />
          {/* <DatePicker className="datepicker"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat ='dd/MM/yyyy'/><br/> */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Select your Date"
                value={selectedDate.startDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          {/* <input style={styles} type="date" required onChange={date => setSelectedDate(date)}/>   */}
          <input
            style={styles}
            type="text"
            placeholder="Description"
            required
            name="description"
            id=""
          />
          <br />
          <input
            style={styles}
            type="text"
            value={name}
            required
            name="work"
            id=""
          />
          <br />
         {/* <Link to={'/registrations'}> */}
         <button
            onClick={handleRegistration}
            style={{
              padding: "10px 10px",
              width: "300px",
              border: "none",
              marginBottom: "20px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Register
          </button>
         {/* </Link> */}
         <Registrations></Registrations>
        </form>
      </div>
    </div>
  );
};

export default Register;
