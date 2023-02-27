import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((data) => setUsers(data.data))
  }, [])

  const deleteUser = (userId) => {

    //call delete api

    axios.delete(`http://localhost:5000/users/${userId}`)
      .then(() => alert("User Delete"))
    window.location.reload()

  }




  return (
    <div className={styles.dashBoard}>
      <div className={styles.CTARow}>
        <input type="search" placeholder="Search Anything..!" />

        <Link to="/addNewUser" className={styles.addNewUserBtn}>
          Add New User!
        </Link>
      </div>

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <Link to={`/edit/${user._id}`} id={styles.editBtn}>Edit</Link>
                </td>
                <td>
                  <button id={styles.deleteBtn} onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
