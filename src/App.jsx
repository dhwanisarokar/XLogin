import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "user" && password === "password") {
      setError(false);
      setIsLogin(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}

      {isLogin ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default App;
