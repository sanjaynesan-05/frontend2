import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    //form data va hold panna

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

//login ah verify panna simple if else condition use pannirukom. 

    if (email === "sanjaynesan007@gmail.com" && password === "sanjay@2005") {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <div className="login-form-group">
          <label className="login-form-label">Email</label>
          <input
            className="login-form-input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="login-form-group">
          <label className="login-form-label">Password</label>
          <input
            className="login-form-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-submit-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;