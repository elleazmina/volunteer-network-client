import React from "react";
import { Button } from "react-bootstrap";

const Works = ({ work }) => {
  return (
    <div style={{ marginBottom: "10px" }} className="col-md-3">
      <img
        style={{ height: "300px" }}
        src={require(`../../images/${work.picture}`)}
        alt=""
      />
      <h3>
        {" "}
        <Button variant="link">{work.name}</Button>
      </h3>
    </div>
  );
};

export default Works;
