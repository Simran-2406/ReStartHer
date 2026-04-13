import { useNavigate } from "react-router-dom";

function Jobs() {

  const navigate = useNavigate();

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const summary = localStorage.getItem("aiSummary") || "";
  const score = localStorage.getItem("matchScore") || 0;
  const confidence = localStorage.getItem("confidence") || "Medium";
  const skillGaps = JSON.parse(localStorage.getItem("skillGaps")) || [];

  // 🔗 Job Details
  const jobDetails = {
    "Online Tutor": {
      link: "https://www.internshala.com/jobs/online-tutor-jobs/",
      salary: "₹10,000 – ₹30,000/month"
    },
    "Content Writer": {
      link: "https://www.internshala.com/jobs/content-writing-jobs/",
      salary: "₹8,000 – ₹25,000/month"
    },
    "Customer Support": {
      link: "https://www.naukri.com/customer-support-jobs",
      salary: "₹12,000 – ₹30,000/month"
    },
    "Virtual Assistant": {
      link: "https://www.linkedin.com/jobs/virtual-assistant-jobs/",
      salary: "₹15,000 – ₹40,000/month"
    },
    "Data Entry": {
      link: "https://www.naukri.com/data-entry-jobs",
      salary: "₹8,000 – ₹20,000/month"
    },
    "Freelancer": {
      link: "https://www.linkedin.com/jobs/freelance-jobs/",
      salary: "Varies (₹5,000 – ₹50,000+)"
    }
  };

  // 🎓 Courses Mapping
  const courseLinks = {
    "Improve grammar": "https://www.youtube.com/results?search_query=english+grammar+course",
    "Learn SEO basics": "https://www.youtube.com/results?search_query=seo+for+beginners",
    "Confidence building": "https://www.youtube.com/results?search_query=confidence+skills",
    "Customer handling": "https://www.youtube.com/results?search_query=customer+service+training",
    "Time management": "https://www.youtube.com/results?search_query=time+management+skills",
    "Email handling": "https://www.youtube.com/results?search_query=email+writing+skills",
    "Excel skills": "https://www.youtube.com/results?search_query=excel+for+beginners",
    "Basic tools": "https://www.youtube.com/results?search_query=computer+basics",
    "Improve subject depth": "https://www.youtube.com/results?search_query=teaching+skills",
    "Learn online teaching tools": "https://www.youtube.com/results?search_query=zoom+google+meet+tutorial"
  };

  return (
    <div className="page-center">

      <div className="glass-card jobs-container">

        <h1>Your Career Plan 🚀</h1>

        {/* AI Summary */}
        <div className="ai-box">
          <p>{summary}</p>
        </div>

        {/* Stats */}
        <div className="ai-stats">
          <p><strong>Match:</strong> {score}%</p>
          <p><strong>Confidence:</strong> {confidence}</p>
        </div>

        {/* Skill Gaps */}
        <div className="skill-gap-box">
          <h3>Skills You Can Improve 🚀</h3>
          <ul>
            {skillGaps.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* 🎓 Courses */}
        <div className="course-box">
          <h3>Recommended Courses 📚</h3>

          {skillGaps.map((skill, index) => (
            <a
              key={index}
              href={courseLinks[skill] || "https://www.youtube.com"}
              target="_blank"
              rel="noreferrer"
              className="course-link"
            >
              Learn: {skill}
            </a>
          ))}
        </div>

        {/* Jobs */}
        <div className="jobs-grid">
          {jobs.map((job, index) => {

            const details = jobDetails[job] || {
              link: "https://www.linkedin.com/jobs/",
              salary: "Varies"
            };

            return (
              <div key={index} className="job-card">

                <h2>{job}</h2>
                <p><strong>Salary:</strong> {details.salary}</p>

                <a href={details.link} target="_blank" rel="noreferrer">
                  <button className="apply-btn">Apply Now</button>
                </a>

              </div>
            );
          })}
        </div>

        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          Back
        </button>

      </div>

    </div>
  );
}

export default Jobs;