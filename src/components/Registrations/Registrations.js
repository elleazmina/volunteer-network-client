import { Card } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";

const Registrations = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/registrations?email="+loggedInUser.email, {
      method: "GET",
      headers: { 
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setRegistrations(data));
  }, []);
  return (
    <div>
        <h3>Number or Registered works:  {registrations.length} </h3>
      {registrations.map((registration) => <li>{registration.name} has registered for volunteer work on {registration.startDate}</li>
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Img variant="top" src="" />
    //       <Card.Body>
    //         <Card.Title>{registration.name} </Card.Title>
    //   <Card.Text>{(new Date(registration.startDate).toDateString('dd/MM/yyyy'))}</Card.Text>
    //         <Button variant="danger">Cancel</Button>
    //       </Card.Body>
    //     </Card>
      )}
    </div>
  );
};

export default Registrations;
