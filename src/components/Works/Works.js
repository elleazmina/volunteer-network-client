import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Works = ({ work }) => {
  const history = useHistory();
  const handleRegister = (name) => {
    history.push(`/register/${name}`);
}
  return (
    <div style={{ marginBottom: "10px" }} className="col-md-3">
      <img
        style={{ height: "300px" }}
        src={require(`../../images/${work.picture}`)}
        alt=""
      />
      <h3>
        {" "}
        <Button onClick={() => handleRegister(work.name)} variant="link">{work.name}</Button>
      </h3>
    </div>
  );
};

export default Works;
