import React from 'react';
import LatestJobCards from './LatestJobCards';

const jobData = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "Building responsive web applications with React",
    position: 3,
    jobType: "Full-time",
    salary: "12-15",
    posted: "2 days ago"
  },
  {
    id: 2,
    company: "Data Analytics Co.",
    location: "Hyderabad, India",
    title: "Data Scientist",
    description: "Working with large datasets and machine learning models",
    position: 2,
    jobType: "Remote",
    salary: "15-20",
    posted: "1 week ago"
  },
  {
    id: 3,
    company: "Design Studio",
    location: "Mumbai, India",
    title: "UI/UX Designer",
    description: "Creating beautiful user interfaces and experiences",
    position: 1,
    jobType: "Contract",
    salary: "10-12",
    posted: "3 days ago"
  },
  {
    id: 4,
    company: "Cloud Innovations",
    location: "Delhi, India",
    title: "DevOps Engineer",
    description: "Implementing CI/CD pipelines and cloud infrastructure",
    position: 2,
    jobType: "Full-time",
    salary: "18-22",
    posted: "Just now"
  },
  {
    id: 5,
    company: "AI Research Labs",
    location: "Remote",
    title: "ML Engineer",
    description: "Developing cutting-edge AI models and algorithms",
    position: 1,
    jobType: "Full-time",
    salary: "20-25",
    posted: "5 days ago"
  },
  {
    id: 6,
    company: "FinTech Solutions",
    location: "Chennai, India",
    title: "Backend Developer",
    description: "Building secure financial systems with Node.js",
    position: 4,
    jobType: "Hybrid",
    salary: "14-18",
    posted: "1 day ago"
  }
];

const LatestJobs = () => { 
  return ( 
    <section className="max-w-7xl mx-auto my-20 p-4 bg-gray-50 rounded-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
        </h1>
        <p className="text-gray-600">Browse through our most recent job postings</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobData.map((job) => (
          <LatestJobCards 
            key={job.id} 
            job={job} 
            className="hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#6A38C2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5D30B0] transition-colors">
          View All Jobs
        </button>
      </div>
    </section>
  );
};

export default LatestJobs;