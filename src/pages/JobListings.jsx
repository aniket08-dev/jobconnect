import React, { useState } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard";

function JobListings() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  // Create unique options for dropdowns
  const uniqueLocations = [...new Set(jobsData.map((job) => job.location))];
  const uniqueTypes = [...new Set(jobsData.map((job) => job.type))];

  // Filter jobs
  // Extract minimum salary from a string like "₹6-9 LPA"
  const extractMinSalary = (salaryStr) => {
    if (!salaryStr) return 0;
    const match = salaryStr.match(/₹?(\d+)-?/);
    return match ? parseInt(match[1]) * 100000 : 0; // convert LPA to INR
  };

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = locationFilter
      ? job.location === locationFilter
      : true;
    const matchesType = typeFilter ? job.type === typeFilter : true;

    const jobMinSalary = extractMinSalary(job.salary);
    const filterMin = salaryFilter ? parseInt(salaryFilter) : 0;

    const matchesSalary = jobMinSalary >= filterMin;

    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Find Your Dream Job</h2>

      {/* Search and Filters */}
      <div className="row g-3 align-items-end mb-4 fade-in">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search job or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Job Types</option>
            {uniqueTypes.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
          >
            <option value="">All Salaries</option>
            <option value="500000">Above ₹5 LPA</option>
            <option value="1000000">Above ₹10 LPA</option>
            <option value="1500000">Above ₹15 LPA</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">No jobs found</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredJobs.map((job) => (
            <div className="col job-card-animate" key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobListings;
