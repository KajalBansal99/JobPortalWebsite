import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeFileHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      profilePicture: e.target.files[0],
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("fullname", input.name);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phone);
      formData.append("password", input.password);
      formData.append("role", input.role);
      if (input.profilePicture) {
        formData.append("profilePhoto", input.profilePicture);
      }

      axios.post("http://localhost:4000/api/v1/user/register", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md mx-auto p-4">
          <form
            onSubmit={submitHandler}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-8"
          >
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-[#6A38C2]">Create an</span> Account
            </h1>

            <div className="mb-4">
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="phone"
                value={input.phone}
                onChange={changeEventHandler}
                placeholder="Enter your phone number"
                required
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Create a password"
                required
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <Label className="block mb-2">Select Role</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                    required
                  />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    id="recruiter"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="recruiter">Recruiter</Label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Label>Profile Picture (Optional)</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer mt-1 w-full"
              />
            </div>

            <div className="mb-6">
              <Button
                type="submit"
                className="w-full bg-[#F83002] hover:bg-[#F83002]/90 text-black"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#F83002] font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
