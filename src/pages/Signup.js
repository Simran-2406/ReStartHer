import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Signup(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ save name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      alert("Account created successfully ✅");
      navigate("/dashboard");

    } catch(error){
      alert(error.message);
    }
  };

  return(
    <div className="auth-container">

     <div className="auth-card glass-card">

        <h1>Create Account 💜</h1>

        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

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

        <button onClick={handleSignup}>
          Create Account
        </button>

        <p className="auth-link">
          Already have an account?{" "}
          <span onClick={()=>navigate("/login")}>Login</span>
        </p>

      </div>

    </div>
  );
}

export default Signup;