// src/components/JobsList.jsx
import { useGetAllJobsQuery } from '@/services/jobApi'; // Ensure this path is correct

const JobsList = () => {
  const { data, isLoading, error } = useGetAllJobsQuery();

  if (isLoading) return <div>Loading jobs...</div>;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div className="space-y-4">
      {data?.jobs?.map(job => (
        <div key={job._id} className="border p-4 rounded-lg">
          <h3 className="font-bold">{job.title}</h3>
          <p>{job.company?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default JobsList;