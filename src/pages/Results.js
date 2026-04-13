import React from "react";

function Results(){

const jobs = [

{
title:"Online Tutor",
salary:"₹10,000 – ₹40,000 / month",
hours:"2–4 hours daily",
platforms:["Vedantu","UrbanPro","Chegg"]
},

{
title:"Content Writer",
salary:"₹5,000 – ₹30,000 / month",
hours:"Flexible",
platforms:["Upwork","Fiverr","Pepper Content"]
},

{
title:"Customer Support Executive",
salary:"₹15,000 – ₹35,000 / month",
hours:"Part time / Full time",
platforms:["Amazon Remote Jobs","Flipkart Support"]
}

]

return(

<div className="results-container">

<h1>Jobs That May Suit You</h1>

<p>
Based on your answers, here are some jobs you can start exploring.
</p>

<div className="jobs-grid">

{jobs.map((job,index)=>(

<div className="job-card" key={index}>

<h3>{job.title}</h3>

<p><b>Salary:</b> {job.salary}</p>

<p><b>Working Time:</b> {job.hours}</p>

<p><b>Where to Apply:</b></p>

<ul>

{job.platforms.map((p,i)=>(
<li key={i}>{p}</li>
))}

</ul>

</div>

))}

</div>

</div>

)

}

export default Results