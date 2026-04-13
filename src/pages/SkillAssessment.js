import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SkillAssessment() {

  const navigate = useNavigate();

  const questions = [
    {
      question: "Have you worked before?",
      options: ["Yes, full-time", "Yes, part-time", "Family business", "No experience"]
    },
    {
      question: "What type of work do you enjoy the most?",
      options: ["Teaching others", "Writing or creating content", "Talking to people", "Managing tasks"]
    },
    {
      question: "How comfortable are you with using a computer or smartphone?",
      options: ["Very comfortable", "Somewhat comfortable", "Basic use only", "Not comfortable"]
    },
    {
      question: "How many hours can you work daily?",
      options: ["1–2 hours", "3–4 hours", "5–6 hours", "Full-time (8+ hours)"]
    },
    {
      question: "What kind of work environment do you prefer?",
      options: ["Work from home", "Office work", "Hybrid (both)", "No preference"]
    },
    {
      question: "Which skill describes you best?",
      options: ["Communication", "Creativity", "Organization", "Technical skills"]
    },
    {
      question: "Are you comfortable talking to customers or clients?",
      options: ["Yes, very comfortable", "Somewhat comfortable", "Only if needed", "Not comfortable"]
    },
    {
      question: "Do you enjoy teaching or helping others learn?",
      options: ["Yes, I love it", "Sometimes", "Not sure", "No"]
    },
    {
      question: "How confident are you in your skills right now?",
      options: ["Very confident", "Somewhat confident", "Low confidence", "Not confident"]
    },
    {
      question: "What kind of tasks do you prefer?",
      options: ["Creative tasks", "Routine tasks", "People interaction", "Managing work"]
    },
    {
      question: "Do you want to learn new skills?",
      options: ["Yes, definitely", "Maybe", "Only if required", "No"]
    },
    {
      question: "What motivates you to work again?",
      options: ["Financial independence", "Personal growth", "Supporting family", "Using my time productively"]
    },
    {
      question: "Do you have a quiet space to work at home?",
      options: ["Yes", "Sometimes", "Rarely", "No"]
    },
    {
      question: "How quickly can you adapt to new technology?",
      options: ["Very fast", "Moderate", "Slow", "Very difficult"]
    },
    {
      question: "What type of job are you most interested in?",
      options: ["Flexible part-time", "Remote full-time", "Freelancing", "Not sure yet"]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionClick = (option) => {
    const updated = [...answers];
    updated[currentQuestion] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an option first");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      suggestJobs();
    }
  };

  // 🔥 AI-LIKE LOGIC
  const suggestJobs = () => {

    let jobs = [];
    let summary = "";
    let score = 0;
    let skillGaps = [];

    const text = answers.join(" ").toLowerCase();

    if (text.includes("teaching")) {
      jobs.push("Online Tutor", "Course Creator");
      summary += "You enjoy teaching others. ";
      score += 20;
      skillGaps.push("Improve subject depth", "Learn online teaching tools");
    }

    if (text.includes("writing")) {
      jobs.push("Content Writer", "Blog Writer");
      summary += "You have strong creative skills. ";
      score += 20;
      skillGaps.push("Improve grammar", "Learn SEO basics");
    }

    if (text.includes("talking")) {
      jobs.push("Customer Support", "Sales Executive");
      summary += "You are comfortable with communication. ";
      score += 15;
      skillGaps.push("Confidence building", "Customer handling");
    }

    if (text.includes("managing")) {
      jobs.push("Virtual Assistant", "Admin Executive");
      summary += "You are good at organizing tasks. ";
      score += 15;
      skillGaps.push("Time management", "Email handling");
    }

    if (text.includes("technical") || text.includes("computer")) {
      jobs.push("Data Entry", "IT Support");
      summary += "You are comfortable with technology. ";
      score += 20;
      skillGaps.push("Excel skills", "Basic tools");
    }

    if (text.includes("remote") || text.includes("home")) {
      jobs.push("Freelancer", "Remote Assistant");
      score += 10;
    }

    jobs = [...new Set(jobs)];
    skillGaps = [...new Set(skillGaps)];

    if (jobs.length === 0) {
      jobs = ["Customer Support", "Data Entry", "Virtual Assistant"];
      summary = "You have flexible potential across multiple roles.";
      score = 50;
      skillGaps = ["Communication", "Basic computer skills"];
    }

    let confidence = "Low";
    if (score > 70) confidence = "High";
    else if (score > 50) confidence = "Medium";

    localStorage.setItem("jobs", JSON.stringify(jobs));
    localStorage.setItem("aiSummary", summary);
    localStorage.setItem("matchScore", score);
    localStorage.setItem("confidence", confidence);
    localStorage.setItem("skillGaps", JSON.stringify(skillGaps));

    navigate("/jobs");
  };

  return (
    <div className="page-center">
      <div className="glass-card quiz-card">

        {/* 🔥 PROGRESS BAR */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

        <p className="progress-text">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        {/* QUESTION */}
        <h2 className="quiz-question">
          {questions[currentQuestion].question}
        </h2>

        {/* OPTIONS */}
        <div className="options">
          {questions[currentQuestion].options.map((opt, index) => (
            <button
              key={index}
              className={`option-btn ${
                answers[currentQuestion] === opt ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button className="next-btn" onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>

      </div>
    </div>
  );
}

export default SkillAssessment;