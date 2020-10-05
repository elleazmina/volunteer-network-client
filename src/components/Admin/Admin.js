import React, { useEffect, useState } from "react";
import logo from "../../images/Group1329.png";

const Admin = () => {
//   const [registrations, setRegistrations] = useState([]);

//   useEffect(() => {
//     fetch("https://localhost:5000/registrations")
//       .then((res) => res.json())
//       .then((data) => setRegistrations(data));
//   }, []);
  return (
    <div>
      <div>
        <img alt="" src={logo} width="250px" height="150px" />
      </div>

      <div className="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Volunteer list</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        </table>
      </div>
      {/* {
          registrations.map(reg => 
            <tr>
                <td>{reg.name}</td>
                <td>{reg.email}</td>
                <td>{reg.startDate}</td>

            </tr>)
      } */}
    </div>
  );
};

export default Admin;
