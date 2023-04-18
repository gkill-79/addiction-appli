
import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      });
      setToken(response.data.token);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  // Fonction pour envoyer une requête à une route protégée
  const fetchProtectedData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/protected", {
        headers: { "x-access-token": token },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
      {message && <p className="error-message">{message}</p>}
      {token && (
        <button onClick={fetchProtectedData}>Fetch Protected Data</button>
      )}
    </div>
  );
};

export default Signin;
















