import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ResumeUpload = ({ userId, onSuccess }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  const { register, handleSubmit, watch } = useForm();
  const selectedFile = watch('resume');

  const onSubmit = async (data) => {
    if (!data.resume || data.resume.length === 0) {
      setUploadError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('resume', data.resume[0]);
    formData.append('userId', userId);

    try {
      setIsUploading(true);
      setUploadError(null);
      setUploadSuccess(false);
      
      await axios.post('http://localhost:8000/api/v1/upload/resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      setUploadSuccess(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(
        error.response?.data?.message || 
        'Failed to upload resume. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Upload Resume</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            {...register('resume', { required: true })}
          />
          <p className="text-sm text-gray-500 mt-1">
            Accepted formats: PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>

        {selectedFile?.length > 0 && (
          <div className="text-sm">
            Selected file: {selectedFile[0].name} (
            {(selectedFile[0].size / 1024 / 1024).toFixed(2)} MB)
          </div>
        )}

        {isUploading && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        {uploadError && (
          <p className="text-red-500 text-sm">{uploadError}</p>
        )}

        {uploadSuccess && (
          <p className="text-green-500 text-sm">
            Resume uploaded successfully!
          </p>
        )}

        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={isUploading}
            className="flex-1"
          >
            {isUploading ? 'Uploading...' : 'Upload Resume'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccess?.()}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResumeUpload;