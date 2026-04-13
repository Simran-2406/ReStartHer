import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      navigate("/dashboard");
    } catch(error){
      alert("Invalid email or password");
    }
  };

  return(
    <div className="auth-container">

      <div className="auth-card glass-card">

        <h1>Welcome Back 💜</h1>

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="auth-link">
          Don’t have an account?{" "}
          <span onClick={()=>navigate("/signup")}>Sign Up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;