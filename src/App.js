import { Route, Routes } from "react-router-dom";
import Login from "./Features/auth/Login";

import AddUser from "./Features/users/AddUser";
import EditUser from "./Features/users/EditUser";
import UserList from "./Features/users/UserList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list-user" element={<UserList />} />
        <Route path="/list-user/add-user" element={<AddUser />} />
        <Route path="/list-user/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
