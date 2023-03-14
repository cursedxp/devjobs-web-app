import { useState } from "react";
import Header from "../components/header/Header";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [jobs, setJobs] = useState(data);
  return (
    <main>
      <Header></Header>
      <h1>Home</h1>
      <div className="jobs">
        {jobs.map((job) => {
          const id = uuidv4();
          return (
            <div className="job-post" key={id}>
              <img className="company-logo" src={job.logo} alt={job.company} />
              <div>
                <div className="postedAt">
                  {job.postedAt}
                  <span className="separator"></span>
                  {job.contract}
                </div>
              </div>
              <div className="position">{job.position}</div>
              <div className="componay-name">{job.company}</div>
              <div className="location">{job.location}</div>
            </div>
          );
        })}
      </div>
      <button>Load More</button>
    </main>
  );
}
