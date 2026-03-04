import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Register.css";

function Register() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Data:", formData);
        alert("Registration Successful!");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>New Register</h2>

                <form onSubmit={handleSubmit}>

                    <label>UserName</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter UserName"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Register</button>

                </form>

                <p style={{ marginTop: "10px" }}>
                    Already have an account? <Link to="/">Login</Link>
                </p>

            </div>
        </div>
    );
}

export default Register;