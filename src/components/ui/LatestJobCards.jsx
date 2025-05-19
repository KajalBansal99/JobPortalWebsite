import React from 'react';
import { Badge } from './badge';

const LatestJobCards = ({ job, className = '' }) => {
  return (
    <div className={`border rounded-xl p-6 bg-white shadow-sm hover:shadow-md ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{job.company}</h3>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <span className="text-xs text-gray-400">{job.posted}</span>
      </div>
      
      <div className="mb-5">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{job.title}</h2>
        <p className="text-gray-600 text-sm">{job.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
          {job.position} Position{job.position > 1 ? 's' : ''}
        </Badge>
        <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
          {job.jobType}
        </Badge>
        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
          ₹{job.salary} LPA
        </Badge>
      </div>
      
      <button className="mt-6 w-full py-2 text-sm font-medium text-[#6A38C2] border border-[#6A38C2] rounded-lg hover:bg-[#6A38C2] hover:text-white transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default LatestJobCards;