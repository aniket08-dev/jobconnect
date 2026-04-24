import { useState } from 'react';

function ApplyForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email.includes('@')) {
      alert("Application submitted successfully!");
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert("Please fill all required fields correctly.");
    }
  };

  return (
    <div className="container my-5">
       <div className="p-4 bg-light shadow rounded-4 border">
    <h2 className="mb-4 text-center">Apply Now</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="3" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
        </div>

        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
    </div>
  );
}

export default ApplyForm;
