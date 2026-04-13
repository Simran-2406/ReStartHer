import { Link } from "react-router-dom";
import woman from "../Assets/woman.svg";

function Home() {
  return (
    <div className="hero">
      <div className="light-overlay"></div>
      <div className="bg-glow"></div>


  {/* ✅ BRAND NAME HERE */}
  <h2 className="brand">ReStartHer</h2>

  {/* LEFT TEXT */}
  <div className="left">

    <h1 className="hero-title">
  Restart your career <br/>
  <span>with confidence</span>
</h1>

    <p>
  Many women pause their careers to take care of their families. 
  <span className="highlight"> ReStartHer helps you rediscover your skills </span> 
  and find flexible jobs that match your lifestyle.
</p>

    <ul>
      <li>• Personalized job suggestions</li>
      <li>• Flexible remote work</li>
      <li>• Skill improvement guidance</li>
    </ul>

  </div>

      {/* CENTER CARD */}
      <div className="center">
        <div className="login-card">
          <h3>Start Your Journey</h3>

          <div className="btn-group">
  <Link to="/login">
    <button className="btn-main">Login</button>
  </Link>

  <Link to="/signup">
    <button className="btn-outline">Sign Up</button>
  </Link>
</div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="right">

  <div className="image-glow"></div>

  <div className="image-bg"></div>

  <img 
    src={woman} 
    alt="career woman"
    className="hero-image"
  />

</div>

    </div>
  );
}

export default Home;