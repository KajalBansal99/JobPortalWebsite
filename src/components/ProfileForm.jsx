import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const ProfileForm = ({ setOpen }) => {
    const { user } = useSelector(store => store.auth);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullname: user?.fullname || '',
            email: user?.email || '',
            phoneNumber: user?.phoneNumber || '',
            bio: user?.profile?.bio || '',
            skills: user?.profile?.skills?.join(', ') || '',
            title: user?.profile?.title || ''
        }
    });

    const onSubmit = async (data) => {
        try {
            // Add your API call here to update profile
            toast.success("Profile updated successfully");
            setOpen(false);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update profile");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input
                        id="fullname"
                        {...register("fullname", { required: "Full name is required" })}
                    />
                    {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
                </div>

                <div>
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                        id="title"
                        {...register("title")}
                        placeholder="e.g. Frontend Developer"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        disabled
                    />
                </div>

                <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                        id="phoneNumber"
                        {...register("phoneNumber")}
                        placeholder="+91 1234567890"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    id="bio"
                    {...register("bio")}
                    rows={4}
                    placeholder="Tell us about yourself..."
                />
            </div>

            <div>
                <Label htmlFor="skills">Skills (comma separated)</Label>
                <Input
                    id="skills"
                    {...register("skills")}
                    placeholder="e.g. React, JavaScript, HTML, CSS"
                />
            </div>

            <div className="flex justify-end gap-2 pt-4">
                <Button 
                    variant="outline" 
                    type="button" 
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
    );
};

export default ProfileForm;