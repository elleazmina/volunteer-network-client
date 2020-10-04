import React, { useContext, useState } from 'react';
import logo from "../../images/Group1329.png";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './Register.css'
import { UserContext } from '../../App';

const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const styles = {padding:'10px 10px', width:'300px', border:'none', marginBottom:'20px', backgroundColor:'whiteSmoke'};
    return (
        <div>
            <div style={{textAlign: 'center', marginBottom:'50px'}}>
            <img
            alt=""
            src={logo}
            width="200px"
            height="100px"
            className="d-inline-block align-top"
          />
         <br/>

        </div>
        <div  style={{border: '1px solid gray', width: '600px', height: '450px', textAlign: 'left', margin:'auto', padding:'30px'}}>
        <h3>Register as a volunteer</h3>
        <form style={{textAlign: 'center'}}  action="">
            <input style={styles} type="text" value={loggedInUser.name} required name="name" id=""/><br/>
            <input style={styles} type="text" value={loggedInUser.email} required name="email" id=""/><br/>
            {/* <DatePicker className="datepicker"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat ='dd/MM/yyyy'/><br/> */}
            <input style={styles} type="date" required onChange={date => setSelectedDate(date)}/>  
            <input style={styles} type="text" placeholder="Description" required name="description" id=""/><br/>
            <input style={styles} type="text" placeholder="Vounteer Work" required name="work" id=""/><br/>
            <input style={{padding:'10px 10px', width:'300px', border:'none', marginBottom:'20px', backgroundColor:'blue', color:'white'}} type="submit" value="Register"/>
        </form>
        </div>
        </div>
    );
};

export default Register;