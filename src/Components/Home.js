import React from "react";
import { Container, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const jsonstring = localStorage.getItem("signuser");
  const finaluser = JSON.parse(jsonstring);
  const history = useHistory();

  const clickevent = () => {
    return history.push("/Editpage");
  };
  const removeUser = () => {
    localStorage.removeItem("loguser");
  };

  return (
    <div>
      <div className="menu">
        <h1 className="text-center text-white mt-1">
          Welcome to THE ESSENTIALS
          <Link to="SignForm">
            <Button onClick={removeUser} color="primary" className="btnofsign">
              Log Out
            </Button>
          </Link>
          {/* <Link to="LoginForm">  <Button outline color="warning">warning</Button></Link> */}
          {/* <Link to="About"><Button color="transparent" className="btn btn-outline-primary">About</Button></Link> */}
        </h1>
      </div>
      <Container fluid className="aboutuser">
        <p>username: {finaluser.username}</p>
        <p>My Name: {localStorage.getItem("name")}</p>
        <p>Email ID: {localStorage.getItem("email")}</p>
        <p>Contact me on Mobile: {localStorage.getItem("smobile")}</p>
        <br />
        <Button color="warning" onClick={clickevent}>
          Edit Details
        </Button>
      </Container>
    </div>
  );
};

export default Home;
