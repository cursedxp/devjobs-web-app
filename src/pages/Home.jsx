import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
import JobPost from "../components/JobPost/JobPost";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Home() {
  const { jobs, jobList, setJobList } = useContext(ThemeContext);

  const setAllJobs = () => {
    setJobList(jobs);
  };

  useEffect(() => {
    setAllJobs();
  }, []);

  return (
    <main>
      <div className="jobs">
        {jobList.map((job) => {
          const id = uuidv4();
          return <JobPost job={job} key={id} />;
        })}
      </div>
      <button className="more">Load More</button>
    </main>
  );
}
