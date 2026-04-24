import { useParams } from 'react-router-dom';
import jobsData from '../data/jobs.json';

function JobDetail() {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));

  if (!job) return <div className="container my-5"><h3>Job not found.</h3></div>;
  
  return (
   
    <div className="container my-5">
      <h2>{job.title}</h2>
      <h5 className="text-muted">{job.company}</h5>
      <p><i className="fas fa-map-marker-alt me-1"></i> {job.location} | {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <hr />
      <h5>Description</h5>
      <p>{job.description}</p>
      <h5>Required Skills</h5>
      <ul>
        {job.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      <a href="/apply" className="btn btn-success mt-3">Apply Now</a>
    </div>
  );
}

export default JobDetail;
