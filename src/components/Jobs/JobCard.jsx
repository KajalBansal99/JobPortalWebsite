// src/components/jobs/JobCard.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useApplyForJobMutation } from '@/services/applicationApi';
import JobDetailsDialog from './JobDetailsDialog';

const JobCard = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [applyForJob, { isLoading }] = useApplyForJobMutation();

  const handleApply = async () => {
    try {
      const result = await applyForJob(job._id).unwrap();
      alert(result.message || 'Application submitted!');
    } catch (error) {
      alert(error.data?.message || 'Failed to apply');
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company?.name}</p>
      
      <div className="flex gap-2 mt-4">
        <Button 
          variant="outline" 
          onClick={() => setShowDetails(true)}
        >
          Details
        </Button>
        <Button 
          onClick={handleApply}
          disabled={isLoading}
        >
          {isLoading ? 'Applying...' : 'Apply Now'}
        </Button>
      </div>

      <JobDetailsDialog
        job={job}
        open={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </div>
  );
};

export default JobCard;