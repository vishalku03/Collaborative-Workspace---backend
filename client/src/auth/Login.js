import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as loginApi } from "../api/auth.api";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await loginApi({ email, password });
      login(res.data.accessToken, res.data.refreshToken);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submit}>Login</button>

      <Link to="/register">Create account</Link>
    </div>
  );
}
