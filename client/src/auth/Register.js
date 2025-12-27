import { useState } from "react";
import { register } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    await register({ email, password });
    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="auth-card">
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Register</button>
    </div>
  );
}


