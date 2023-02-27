import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const AddNewUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); //to stop the reloading

    alert("New User Added Successfully!");

    navigate("/"); //navigate/redirect to home

    const userData = {
      name: name,
      email: email,
      contact: contact,
    }
    console.log(userData)

    axios.post("http://localhost:5000/users", userData)
      .then((res) => console.log(res))
  };

  return (
    <div className={styles.formContainer}>
      <h3>Add New User</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Full Name" required onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter Your Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Enter Your Contact Number" required onChange={(e) => setContact(e.target.value)} />
        <input type="submit" value="Create New User!" />

        <Link to="/" className={styles.backBtn}>
          &lt;- Back to Home!
        </Link>
      </form>
    </div>
  );
};

export default AddNewUser;
