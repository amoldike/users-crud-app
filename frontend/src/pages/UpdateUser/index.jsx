import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [userData, setUserData] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userId}`).then((res) => {
            console.log(res.data[0]);
            setUserData(res.data[0])
            setName(res.data[0].name)
            setEmail(res.data[0].email)
            setContact(res.data[0].contact)
        });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault(); //to stop the reloading

        alert("New User Added Successfully!");

        navigate("/"); //navigate/redirect to home

        const userData = {
            name: name,
            email: email,
            contact: contact,
        };
        console.log(userData);

        axios
            .put(`http://localhost:5000/users/${userId}`, userData)
            .then((res) => console.log(res));
    };

    return (
        <div className={styles.formContainer}>
            <h3>Update User Details</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={userData.name}
                />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={userData.email}
                />
                <input
                    type="number"
                    placeholder="Enter Your Contact Number"
                    required
                    onChange={(e) => setContact(e.target.value)}
                    defaultValue={userData.contact}
                />
                <input type="submit" value="Update User!" />

                <Link to="/" className={styles.backBtn}>
                    &lt;- Back to Home!
                </Link>
            </form>
        </div>
    );
};

export default UpdateUser;
