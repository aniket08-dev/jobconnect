import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
        <p className="card-text"><i className="fas fa-map-marker-alt me-2"></i>{job.location}</p>
        <p className="card-text"><i className="fas fa-money-bill-wave me-2"></i>{job.salary}</p>

        {/* ✅ Skills as badges */}
        <div className="mt-3">
          {job.skills?.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="badge bg-secondary me-1">{skill}</span>
          ))}
        </div>

        {/* ✅ View Details Button */}
        <div className="mt-auto">
          <Link to={`/job/${job.id}`} className="btn btn-primary w-100 mt-3">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
