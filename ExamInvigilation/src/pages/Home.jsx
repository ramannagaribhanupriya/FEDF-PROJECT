import "../styles/Home.css";

function Home({ setPage }) {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Smart Exam Invigilation System</h1>

        <button
          className="login-btn"
          onClick={() => {
            console.log("Login clicked");
            setPage("login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;