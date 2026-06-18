import "../styles/Login.css";

function Login({ setPage }) {
  const handleLogin = () => {
    setPage("dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <div className="logo">🎓</div>

          <h2>Invigilation System</h2>

          <p>Examination Duty Management Portal</p>
        </div>


        <div className="input-group">
          <label>Username</label>
          <input
            type="email"
            placeholder="Enter Username"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Sign In
        </button>

        <div className="footer-text">
          © 2025 Examination Invigilation System — Secure Portal
        </div>

      </div>
    </div>
  );
}

export default Login;