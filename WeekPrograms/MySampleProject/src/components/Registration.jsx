import React, { useState } from "react";

function Registration() {
  const [user, setUser] = useState({
    username: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [details, setDetails] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    setDetails(user);
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0f1f",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Implement the Registration Example</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid gray",
          padding: "20px",
          margin: "20px",
        }}
      >
        {/* Registration Form */}
        <div>
          <h2>Registration</h2>

          <div>
            User Name:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div>
            Mobile:
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
            />
          </div>

          <div>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div>
            Address:
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleRegister}>Register</button>
        </div>

        {/* Details Section */}
        <div>
          <h2>Details</h2>

          {details && (
            <>
              <p>
                <b>User Name:</b> {details.username}
              </p>

              <p>
                <b>Mobile:</b> {details.mobile}
              </p>

              <p>
                <b>Email:</b> {details.email}
              </p>

              <p>
                <b>Address:</b> {details.address}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Registration;