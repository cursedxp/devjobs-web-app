import { useState } from "react";
import Header from "../components/header/Header";
import data from "../data/data.json";
export default function Home() {
  const [jobs, setJobs] = useState(data);
  return (
    <main>
      <Header></Header>
      <h1>Home</h1>
      <div className="jobs">
        <div className="job-post">
          <img src="" alt="" className="company-logo" />
          <div>
            <div className="postedAt">
              <span className="separator"></span>
            </div>
          </div>
          <div className="position"></div>
          <div className="componay-name"></div>
          <div className="location"></div>
        </div>
      </div>
      <button>Load More</button>
    </main>
  );
}
