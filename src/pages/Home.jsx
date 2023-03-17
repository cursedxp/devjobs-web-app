import { useState } from "react";
import Header from "../components/Header/Header";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";
import JobPost from "../components/JobPost/JobPost";

export default function Home() {
  const [jobs, setJobs] = useState(data);

  return (
    <main>
      <Header></Header>
      <div className="jobs">
        {jobs.map((job) => {
          const id = uuidv4();
          return <JobPost job={job} key={id} />;
        })}
      </div>
      <button className="more">Load More</button>
    </main>
  );
}
