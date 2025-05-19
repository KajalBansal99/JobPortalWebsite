import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';

const ApplyNowDialog = ({ jobId, open, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const formData = new FormData();
      formData.append('resume', data.resume[0]);
      formData.append('coverLetter', data.coverLetter);
      formData.append('jobId', jobId);

      await axios.post('/api/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Application failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply for this Position</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="resume">Resume (PDF only)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf"
              {...register('resume', { required: 'Resume is required' })}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <textarea
              id="coverLetter"
              className="w-full border rounded-md p-2 min-h-[100px]"
              {...register('coverLetter')}
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm">
              Application submitted successfully!
            </p>
          )}
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyNowDialog;