import { useState } from "react";
import "./App.css";

const tokenIdArr = [];

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if(username && password) {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
      
          username: username,
          password: password,
        })
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
          let obj = {
            id : data.id,
            token : data.token
          }
          tokenIdArr.push(obj);
          localStorage.setItem("tokenId", JSON.stringify(tokenIdArr));
        })
    }
  }

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login Page</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;
