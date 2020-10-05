import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import logo from "../../images/Group1329.png";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    // if(firebase.app.length === 0) {
      
    // }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    
    const handleSignIn = () => {
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              // isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            };
            setLoggedInUser(signedInUser);
            storeAuthToken();
            
            // setUser(signedInUser);
    
            // console.log(displayName, email, photoURL);
          })
          .catch((err) => {
            console.log(err);
            console.log(err.message);
          });
      };

      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function(error) {
          // Handle error
        });
      }
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

        <div  style={{border: '1px solid gray', width: '400px', height: '300px', textAlign: 'center', margin:'auto', paddingTop:'30px'}}>
        <h2>Login With</h2>
          <br/>
          <button style={{width: "300px",height: "40px",backgroundColor: "white",color: "black", fontSize: "20px", border: "1px solid gray",borderRadius: "15px"}} onClick={handleSignIn}> <FontAwesomeIcon icon={faGlobe} />Continue with Google</button>
          <br/>
          <p>Don't have an account? <Button variant="link"> Create an account</Button></p>
        </div>
</div>
    );
};

export default Login;