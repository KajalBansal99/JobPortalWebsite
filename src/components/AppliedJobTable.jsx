import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Check, X } from 'lucide-react';

const AppliedJobTable = () => {
    // This would come from your Redux store or API
    const appliedJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Corp",
            status: "Pending",
            appliedDate: "2023-05-15",
            salary: "12-15 LPA"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "Design Hub",
            status: "Accepted",
            appliedDate: "2023-05-10",
            salary: "10-12 LPA"
        },
        {
            id: 3,
            title: "Backend Engineer",
            company: "Data Systems",
            status: "Rejected",
            appliedDate: "2023-04-28",
            salary: "15-18 LPA"
        }
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Accepted':
                return <Badge className="bg-green-100 text-green-800"><Check size={14} className="mr-1" /> {status}</Badge>;
            case 'Rejected':
                return <Badge className="bg-red-100 text-red-800"><X size={14} className="mr-1" /> {status}</Badge>;
            default:
                return <Badge className="bg-yellow-100 text-yellow-800"><Clock size={14} className="mr-1" /> {status}</Badge>;
        }
    };

    return (
        <Table>
            <TableCaption>Your recent job applications</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {appliedJobs.map((job) => (
                    <TableRow key={job.id}>
                        <TableCell className="font-medium">{job.title}</TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.salary}</TableCell>
                        <TableCell>{job.appliedDate}</TableCell>
                        <TableCell>{getStatusBadge(job.status)}</TableCell>
                        <TableCell>
                            <Button variant="outline" size="sm">
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AppliedJobTable;