import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { Pen } from 'lucide-react';
import ProfileForm from './ProfileForm';

const UpdateProfileDialog = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <ProfileForm setOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileDialog;