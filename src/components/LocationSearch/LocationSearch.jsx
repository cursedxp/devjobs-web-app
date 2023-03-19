import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/context";

export default function LocationSearch(second) {
  const { jobs, setJobList } = useContext(ThemeContext);
  const [location, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleLocationSearch = (location) => {
    if (location === "") {
      setJobList(jobs);
    } else {
      //Filters job location
      const filteredLocations = jobs.filter((job) => {
        const jobLocation = job.location.toLowerCase();
        const locationText = location.toLowerCase();
        return jobLocation.includes(locationText);
      });
      setJobList(filteredLocations);
    }
  };

  const checkState = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="location-contract">
      <input
        type="search"
        name="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          handleLocationSearch(e.target.value);
        }}
      />
      <label htmlFor="">
        <input
          type="checkbox"
          name="contract"
          checked={isChecked}
          onChange={checkState}
        />
        Full time only
      </label>
      <button>Search</button>
    </div>
  );
}
