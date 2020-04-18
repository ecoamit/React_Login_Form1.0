import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const valueChange = (e) => {
    setUsername(e.target.value);
  };

  const value1Change = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    // if (username === "") {
    //   alert("pls enter something");

    // }
    const loguser = { username, password };

    // console.log(loginusername)
    // console.log(localStorage.getItem("username"))
    localStorage.setItem("loguser", JSON.stringify(loguser));

    if (localStorage.getItem("loguser") === localStorage.getItem("signuser")) {
      return history.push("/Home");
    }
    alert("Wrong Login Details");
  };

  return (
    <div className="formcontainer">
      <Form id="my-form" onSubmit={handleChange}>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input
            type="text"
            required
            name="username"
            placeholder="Username"
            value={username}
            onChange={valueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            required
            name="password"
            placeholder="password"
            value={password}
            onChange={value1Change}
          />
        </FormGroup>
      </Form>
      <br />
      <Button color="warning" form="my-form" type="submit">
        Login
      </Button>
      <Link to="SignForm">
        <Button color="warning" className="ml-5">
          {" "}
          Sign Up{" "}
        </Button>
      </Link>
    </div>
  );
};

export default LoginForm;
