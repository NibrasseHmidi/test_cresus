import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import Nav from "../../Components/Nav";
import TextField from "../../Components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
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
          Edit User
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
          <Button onClick={handleEditUser}> Edit </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
