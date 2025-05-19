import React, { useState } from 'react';
import Job from './Job';
import FilterCard from './FilterCard';
import Navbar from './ui/shared/Navbar';
import Footer from './ui/shared/Footer';

const mockJobs = [
  {
    id: 1,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 2,
    company: "DataSystems",
    location: "Delhi NCR, India",
    title: "Backend Engineer",
    description: "Join our backend team to build scalable microservices. Node.js and MongoDB experience preferred.",
    positions: 2,
    type: "Full-time",
    salary: "18LPA",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/abstract-company-logo-vector-template-600nw-1272435904.jpg",
    industry: "Backend Developer"
  },
  {
    id: 3,
    company: "CloudTech",
    location: "Hyderabad, India",
    title: "Full Stack Developer",
    description: "Looking for a full stack developer with experience in both frontend and backend technologies.",
    positions: 1,
    type: "Contract",
    salary: "20LPA",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/abstract-logo-modern-creative-design-600nw-1917035413.jpg",
    industry: "FullStack Developer"
  },
  {
    id: 4,
    company: "WebSolutions",
    location: "Pune, India",
    title: "UI/UX Designer",
    description: "Creative UI/UX designer needed to revamp our product interfaces.",
    positions: 2,
    type: "Part-time",
    salary: "12LPA",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/abstract-creative-modern-logo-design-600nw-1933885669.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 5,
    company: "MobileFirst",
    location: "Mumbai, India",
    title: "React Native Developer",
    description: "Join our mobile team to build cross-platform applications with React Native.",
    positions: 1,
    type: "Full-time",
    salary: "16LPA",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/abstract-creative-colorful-logo-design-600nw-1933885669.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 6,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 7,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 8,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 9,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 10,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 11,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
  {
    id: 12,
    company: "TechCorp",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to join our team. Experience with React and TypeScript required.",
    positions: 3,
    type: "Full-time",
    salary: "15LPA",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    logo: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    industry: "Frontend Developer"
  },
];

const Jobs = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const filteredJobs = mockJobs.filter(job => {
    return Object.entries(selectedFilters).every(([key, value]) => {
      if (!value) return true;
      
      if (key === "Location") {
        return job.location.includes(value);
      }
      if (key === "Industry") {
        return job.industry === value;
      }
      if (key === "Salary") {
        return job.salary.includes(value.split('-')[0]);
      }
      return true;
    });
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto w-full mt-20 px-4 flex-grow pb-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <FilterCard 
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          
          <div className="flex-1">
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-[#6A38C2]">12 Jobs</span> Found
            </h1>
            </div>
            
            <div className="h-[calc(100vh-180px)] overflow-y-auto pb-5">
              {filteredJobs.length === 0 ? (
                <div className="flex items-center justify-center h-full bg-white rounded-md p-8">
                  <span className="text-gray-500 text-lg">
                    No jobs found matching your criteria
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredJobs.map((job) => (
                    <Job key={job.id} job={job} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;