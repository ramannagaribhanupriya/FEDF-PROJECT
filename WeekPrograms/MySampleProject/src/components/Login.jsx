import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login Successful!");
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0f1f",
        height: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h2>implement the Login Example</h2>

      <div style={{ marginTop: "30px" }}>
        <label>User Name</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          style={{
            width: "250px",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#444",
            color: "white",
            border: "1px solid #777",
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          style={{
            width: "250px",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#444",
            color: "white",
            border: "1px solid #777",
          }}
        />
      </div>

      <button
        onClick={handleLogin}
        style={{
          marginTop: "25px",
          padding: "10px 30px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;