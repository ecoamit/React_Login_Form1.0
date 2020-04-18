import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Header = () => {
  return (
    <div className="menu">
      <h1 className="text-center text-white mt-1">
        Welcome to THE ESSENTIALS
        <Link to="SignForm">
          <Button color="primary" className="btnofsign">
            Sign Up
          </Button>
        </Link>
        {/* <Link to="LoginForm">  <Button outline color="warning">warning</Button></Link> */}
        {/* <Link to="About"><Button color="transparent" className="btn btn-outline-primary">About</Button></Link> */}
      </h1>
    </div>
  );
};

export default Header;
