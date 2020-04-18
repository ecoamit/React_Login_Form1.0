import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Header = () => {
  const [btnClicked, setBtnClicked] = useState(true);
  const handlechange = () => {
    const hidetxt = false;
    setBtnClicked(hidetxt);
  };

  return (
    <div className="menu">
      <h1 className="text-center text-white mt-1">
        <Link to="LoginForm">
          <Button onClick={handlechange} color="warning" className="btnoflogin">
            Home
          </Button>
        </Link>
        Welcome to THE ESSENTIALS
        <Link to="SignForm">
          <Button onClick={handlechange} color="warning" className="btnofsign">
            Sign Up
          </Button>
        </Link>
      </h1>
      {btnClicked && (
        <h1 className="textStyle">
          <p>Great Times Are Ahead</p>
          <p />
          <p>
            <q>
              The way I see it,
              <br />
              if you want the
              <br />
              rainbow,you
              <br />
              gotta put up with
              <br />
              the rain
            </q>
          </p>
          <cite>-- DOLLY PARTON</cite>
        </h1>
      )}
    </div>
  );
};

export default Header;
