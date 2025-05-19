// src/hooks/useGetAppliedJobs.js
import { useEffect } from 'react'; // Add this import
import { useGetAppliedJobsQuery } from '@/services/applicationApi';
import { useDispatch } from 'react-redux';
import { setAppliedJobs } from '/src/redux/slice/jobSlice.js';

export const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetAppliedJobsQuery();

  useEffect(() => {
    if (data?.success) {
      dispatch(setAppliedJobs(data.applications));
    }
  }, [data, dispatch]);

  return { isLoading, error, appliedJobs: data?.applications };
};