import React, { useState } from 'react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen, FileText, Award, Briefcase, GraduationCap, Download } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import Navbar from './ui/shared/Navbar';
import { useGetAppliedJobs } from './hooks/useGetAppliedJobs';
import ResumeUpload from './ResumeUpload';

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    const { user } = useSelector(store => store.auth);

    const handleDownloadResume = () => {
        if (user?.profile?.resume) {
            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = user.profile.resume;
            link.download = user.profile.resumeOriginalName || 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-32"></div>
                    <div className="px-6 pb-6 -mt-16 relative">
                        <div className="flex justify-between items-end">
                            <div className="flex items-end gap-6">
                                <Avatar className="h-32 w-32 border-4 border-white">
                                    <AvatarImage 
                                        src={user?.profile?.avatar || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} 
                                        alt="profile" 
                                    />
                                </Avatar>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{user?.fullname}</h1>
                                    <p className="text-gray-600">{user?.profile?.title || 'Job Seeker'}</p>
                                </div>
                            </div>
                            <Button 
                                onClick={() => setOpen(true)} 
                                variant="outline" 
                                className="gap-2"
                            >
                                <Pen size={16} /> Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* About Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-600">{user?.profile?.bio || 'No bio added yet.'}</p>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="text-gray-500" size={18} />
                                    <span className="text-gray-600">{user?.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Contact className="text-gray-500" size={18} />
                                    <span className="text-gray-600">{user?.phoneNumber || 'Not provided'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {user?.profile?.skills?.length ? (
                                    user.profile.skills.map((skill, index) => (
                                        <Badge key={index} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <span className="text-gray-500">No skills added</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Resume Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Resume</h2>
                                {user?.profile?.resume && (
                                    <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={handleDownloadResume}
                                    >
                                        <Download size={16} className="mr-2" />
                                        Download
                                    </Button>
                                )}
                            </div>
                            
                            {showUpload ? (
                                <ResumeUpload userId={user?._id} onSuccess={() => {
                                    setShowUpload(false);
                                    // You might want to refresh user data here
                                }} />
                            ) : user?.profile?.resume ? (
                                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                                    <FileText className="text-blue-500" size={24} />
                                    <div>
                                        <p className="font-medium">{user.profile.resumeOriginalName || 'My Resume'}</p>
                                        <p className="text-sm text-gray-500">Last updated: {new Date(user.profile.resumeUpdatedAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <FileText className="mx-auto text-gray-400" size={48} />
                                    <p className="mt-2 text-gray-500">No resume uploaded</p>
                                    <Button 
                                        variant="outline" 
                                        className="mt-4"
                                        onClick={() => setShowUpload(true)}
                                    >
                                        Upload Resume
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Experience Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Experience</h2>
                                <Button variant="outline" size="sm">
                                    Add
                                </Button>
                            </div>
                            {user?.profile?.experience?.length ? (
                                <div className="space-y-4">
                                    {user.profile.experience.map((exp, index) => (
                                        <div key={index} className="border-l-2 border-purple-500 pl-4 py-1">
                                            <h3 className="font-medium">{exp.position}</h3>
                                            <p className="text-sm text-gray-600">{exp.company}</p>
                                            <p className="text-xs text-gray-500">
                                                {exp.startDate} - {exp.endDate || 'Present'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Briefcase className="mx-auto text-gray-400" size={48} />
                                    <p className="mt-2 text-gray-500">No experience added</p>
                                </div>
                            )}
                        </div>

                        {/* Education Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Education</h2>
                                <Button variant="outline" size="sm">
                                    Add
                                </Button>
                            </div>
                            {user?.profile?.education?.length ? (
                                <div className="space-y-4">
                                    {user.profile.education.map((edu, index) => (
                                        <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                                            <h3 className="font-medium">{edu.degree}</h3>
                                            <p className="text-sm text-gray-600">{edu.institution}</p>
                                            <p className="text-xs text-gray-500">
                                                {edu.startYear} - {edu.endYear}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <GraduationCap className="mx-auto text-gray-400" size={48} />
                                    <p className="mt-2 text-gray-500">No education added</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Applied Jobs Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Applied Jobs</h2>
                    <AppliedJobTable />
                </div>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;