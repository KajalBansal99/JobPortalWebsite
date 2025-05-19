// src/services/applicationApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api/v1/application',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAppliedJobs: builder.query({
      query: () => '/applied-jobs',
    }),
    applyForJob: builder.mutation({
      query: (jobId) => ({
        url: `/apply/${jobId}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { 
  useGetAppliedJobsQuery,
  useApplyForJobMutation 
} = applicationApi;