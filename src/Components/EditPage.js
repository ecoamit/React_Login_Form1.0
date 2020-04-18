import React, { useState } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, useHistory } from "react-router-dom";



const Editpage = () => {
  const initname = localStorage.getItem("name");
const initmobile = localStorage.getItem("smobile");
const initemail = localStorage.getItem("email");
  const [name, setName] = useState(initname);
  const [mobile, setMobile] = useState(initmobile);
  const [email, setEmail] = useState(initemail);
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("smobile", mobile);
    localStorage.setItem("email", email);
    return history.push("/Home");
  };

  return (
    <div className="menu">
      <h1 className="text-center text-white mt-1">Welcome to THE ESSENTIALS</h1>
      <br />
      <Form onSubmit={handleChange}>
        <FormGroup>
          <Label for="name">Edit Name</Label>
          <Input
            type="text"
            required
            name="name"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Edit Mobile</Label>
          <Input
            type="number"
            required
            name="mobile"
           
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Edit Email ID</Label>
          <Input
            type="email"
            required
            name="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Editpage;
