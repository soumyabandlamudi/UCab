import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/AdminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data.users);
    } catch (err) {
      alert("Unable to fetch users");
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-users">

        <h2>Registered Users</h2>
         <table>

  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody>

    {users.map((user) => (

      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>

    ))}

  </tbody>

</table>
         
      </div>

    </>
  );
}

export default AdminUsers;