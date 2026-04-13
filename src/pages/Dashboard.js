import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Dashboard() {

  const navigate = useNavigate();

  const user = auth.currentUser;
  const jobs = JSON.parse(localStorage.getItem("jobs"));

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <div className="glass-card dashboard-card">

        <h1>
          Welcome, {user?.displayName || "User"} ✨
        </h1>

        {!jobs ? (
          <>
            <p>
              To help you find the best job opportunities, we need to understand
              your skills and preferences.
            </p>

            <button onClick={() => navigate("/skills")}>
              Take Skill Assessment
            </button>
          </>
        ) : (
          <>
            <p>
              Based on your profile, we have found some job opportunities for you.
            </p>

            <div className="dashboard-buttons">

              <button onClick={() => navigate("/jobs")}>
                View Jobs
              </button>

              <button onClick={() => navigate("/skills")}>
                Retake Assessment
              </button>

            </div>
          </>
        )}

        {/* 🔥 LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;