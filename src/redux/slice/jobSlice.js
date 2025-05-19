// src/redux/slices/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    singleJob: null,
    jobs: [],
    loading: false,
    error: null
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearJobState: (state) => {
            state.singleJob = null;
            state.error = null;
        }
    }
});


export const setAppliedJobs = (jobs) => {
  // function implementation
};


export default jobSlice.reducer;