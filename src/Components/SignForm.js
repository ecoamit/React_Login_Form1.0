import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory, Link } from "react-router-dom";

const SignForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const signuser = { username, password };
  const userdetails = { name, mobile, email };

  const handleChange = (e) => {
    e.preventDefault();

    localStorage.setItem("signuser", JSON.stringify(signuser));
    localStorage.setItem("userdetails", JSON.stringify(userdetails));

    return history.push("/LoginForm");

    // setPassword("");
    // setUsername("");
    // setMobile("");
    // setName("");
    // setEmail("");
  };

  return (
    <div className="formcontainer">
      <Form className="form1" onSubmit={handleChange}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            required
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Mobile </Label>
          <Input
            type="number"
            required
            name="mobile"
            placeholder="Enter Your Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Email </Label>
          <Input
            type="email"
            required
            name="email"
            placeholder="name@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Invalid email address format "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
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
            pattern="(?=.*\d).{8,}"
            title="Must contain at least one number and at least 8 or more characters"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <br />
        <Button color="warning">Sign Up</Button>
        <Link to="LoginForm">
          <Button color="warning" className="ml-5">
            Log In
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default SignForm;
