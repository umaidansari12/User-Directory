import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onContactNumberChange = (e) => setContactNumber(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(contactNumber);

    const res = await addUserData({ name, email, contactNumber });

    handleReset();
  };

  const addUserData = async ({ name, email, contactNumber }) => {
    const res = await axios.post("http://localhost:5000/userInfo", {
      name,
      email,
      contactNumber,
    });
  };
  const handleReset = () => {
    setName("");
    setEmail("");
    setContactNumber("");
  };

  return (
    <Paper
      style={{
        margin: "100px 500px 100px 500px",
        padding: "100px",
        display: "grid",
      }}
    >
      <h2>Enter Your Information</h2>
      <TextField
        value={name}
        label={"Name"}
        onChange={onNameChange}
        style={{
          margin: 10,
        }}
      />
      <TextField
        value={email}
        label={"Email Address"}
        onChange={onEmailChange}
        style={{
          margin: 10,
        }}
      />
      <TextField
        value={contactNumber}
        label={"Contact Number"}
        onChange={onContactNumberChange}
        style={{
          margin: 10,
        }}
      />
      
      <Button
        onClick={async (e) => await handleSubmit(e)}
        variant="contained"
        style={{
          margin: 10,
        }}
      >
        <Link to="/" style={{textDecoration: 'none'}}>
        Submit
        </Link>
        
      </Button>
      
      
      <Button
        onClick={handleReset}
        style={{
          margin: 10,
        }}
        variant="contained"
        color="error"
      >
        Reset
      </Button>
    </Paper>
  );
};

export default FormComponent;
