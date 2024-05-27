import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h1>Login:</h1>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />{" "}
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
