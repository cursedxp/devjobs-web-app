import { useEffect, useState } from "react";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/mobile/searchIcon.svg";
import { ThemeContext } from "../../context/context";
import { useContext } from "react";

export default function Filter() {
  const [search, setSearch] = useState("");
  const { jobs, setJobList } = useContext(ThemeContext);

  const handleSearch = (searchText) => {
    if (searchText === "") {
      // Reset job list if search text is empty
      setJobList(jobs);
    } else {
      //Filters company names and positions
      const filteredJobs = jobs.filter((job) => {
        const company = job.company.toLowerCase();
        const position = job.position.toLowerCase();
        const text = searchText.toLowerCase();
        return company.includes(text) || position.includes(text);
      });
      setJobList(filteredJobs);
    }
  };

  return (
    <div className="filter">
      <form action="">
        <input
          name="search"
          type="search"
          placeholder="Filter by title…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button className="white">
          <img src={filterIcon} alt="filter" width={"20px"} height={"20px"} />
        </button>
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  );
}
