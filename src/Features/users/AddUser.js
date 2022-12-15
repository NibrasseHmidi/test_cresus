import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Components/Button";
import Nav from "../../Components/Nav";
import TextField from "../../Components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/list-user");
  };
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          Add user
        </h1>
        <div className="mt-10 max-w-xl mx-auto">
          <TextField
            label="Name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            inputProps={{ type: "text", placeholder: "add User" }}
          />
          <br />
          <TextField
            label="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            inputProps={{ type: "email", placeholder: "user@gmail.com" }}
          />
          <Button onClick={handleAddUser}> Submit </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
