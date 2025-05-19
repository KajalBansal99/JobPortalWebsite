// src/services/jobApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api/v1/job',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => '/all', // Make sure this matches your backend endpoint
    }),
    // Add other endpoints as needed
    getJobById: builder.query({
      query: (id) => `/${id}`,
    }),
    postJob: builder.mutation({
      query: (jobData) => ({
        url: '/post',
        method: 'POST',
        body: jobData,
      }),
    }),
  }),
});

// Make sure these exports match exactly what you're importing
export const { 
  useGetAllJobsQuery, // This must match your import
  useGetJobByIdQuery,
  usePostJobMutation 
} = jobApi;