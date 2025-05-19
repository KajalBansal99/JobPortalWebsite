import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (!input.email || !input.password) {
        throw new Error("Please fill in all fields");
      }

      // Replace with actual API call
      const response = await mockAuthAPI(input);
      
      if (response.success) {
        const redirectPath = login({
          email: input.email,
          name: response.name || input.email.split('@')[0],
          avatar: response.avatar || `https://ui-avatars.com/api/?name=${input.email.split('@')[0]}`,
          role: input.role,
          phoneNumber: response.phoneNumber || '',
          profile: {
            bio: response.bio || '',
            skills: response.skills || [],
            resume: response.resume || '',
            resumeOriginalName: response.resumeOriginalName || ''
          }
        });
        
        toast.success("Login successful!");
        navigate(redirectPath);
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Mock API function - replace with real implementation
  const mockAuthAPI = async (credentials) => {
    return new Promise(resolve => setTimeout(() => resolve({
      success: true,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      phoneNumber: "+1234567890",
      bio: "Software Developer with 5 years of experience",
      skills: ["JavaScript", "React", "Node.js"],
      resume: "https://example.com/resume.pdf",
      resumeOriginalName: "John_Doe_Resume.pdf"
    }), 1000));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome Back to <span className="text-[#6A38C2]">JobPortal</span>
              </h1>
              <p className="text-gray-600 mt-2">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full mt-1"
                />
              </div>

              <div className="pt-2">
                <Label className="block mb-2">Account Type</Label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={handleInputChange}
                      className="cursor-pointer"
                    />
                    <span>Student</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={handleInputChange}
                      className="cursor-pointer"
                    />
                    <span>Recruiter</span>
                  </label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-[#6A38C2] hover:bg-[#5A2CAD] text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <div className="mt-4 text-center text-sm">
              <Link
                to="/forgot-password"
                className="text-[#6A38C2] hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#6A38C2] font-medium hover:underline"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;