// src/components/jobs/JobDetailsDialog.jsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const JobDetailsDialog = ({ job, open, onClose }) => {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{job.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Company:</h4>
              <p>{job.company?.name}</p>
            </div>
            <div>
              <h4 className="font-medium">Location:</h4>
              <p>{job.location}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">Description:</h4>
            <p className="whitespace-pre-line mt-2">{job.description}</p>
          </div>
          
          {job.requirements?.length > 0 && (
            <div>
              <h4 className="font-medium">Requirements:</h4>
              <ul className="list-disc pl-5 mt-2">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;