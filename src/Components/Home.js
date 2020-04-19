import React from "react";
import { Container, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const jsonstring = localStorage.getItem("signuser");
  const signuser = JSON.parse(jsonstring);
  const jsonstring1 = localStorage.getItem("userdetails");
  const userdetails = JSON.parse(jsonstring1);
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
          <Link to="LoginForm">
            <Button onClick={removeUser} color="primary" className="btnofsign">
              Log Out
            </Button>
          </Link>
        </h1>
      </div>
      <Container fluid className="aboutuser">
        <p>Username: {signuser.username}</p>
        <p>My Name: {userdetails.name}</p>
        <p>Email ID: {userdetails.email}</p>
        <p>Contact me on Mobile: {userdetails.mobile}</p>
        <br />
        <Button color="warning" onClick={clickevent}>
          Edit Details
        </Button>
      </Container>
    </div>
  );
};

export default Home;
