import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const loguser = { username, password };
    localStorage.setItem("loguser", JSON.stringify(loguser));

    if (localStorage.getItem("loguser") === localStorage.getItem("signuser")) {
      return history.push("/Home");
    }
    alert("Invalid Login Details");
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
