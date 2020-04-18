import React, { useState } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const Editpage = () => {
  const jsonstring1 = localStorage.getItem("userdetails");
  const userdetailsold = JSON.parse(jsonstring1);
  const [name, setName] = useState(userdetailsold.name);
  const [mobile, setMobile] = useState(userdetailsold.mobile);
  const [email, setEmail] = useState(userdetailsold.email);
  const history = useHistory();

  const userdetails = { name, mobile, email };

  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
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
