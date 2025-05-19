// uploadRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `resume-${req.user.id}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only PDF, DOC, and DOCX files are allowed!'));
  }
});

router.post(
  '/resume',
  protect,
  upload.single('resume'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      // Update user in database
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        {
          'profile.resume': `/uploads/resumes/${req.file.filename}`,
          'profile.resumeOriginalName': req.file.originalname,
          'profile.resumeUpdatedAt': new Date()
        },
        { new: true }
      );

      res.status(200).json({
        message: 'Resume uploaded successfully',
        resume: updatedUser.profile.resume
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

export default router;