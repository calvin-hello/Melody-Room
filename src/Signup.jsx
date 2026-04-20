import './nav.css';
import {useState} from "react"
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            })
            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            }

            const data = await response.json()
            console.log(data)
            alert("Sign up successful!")
        }
        catch (error) {
            console.error("Sign up failed", error)
            alert("Sign up failed! Please try again!")
        }
    }
    

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>

                <p className="login-text">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    );
}