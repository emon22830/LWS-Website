import React from 'react';
import { Input,} from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Signup = () => {
  const[user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  })

  const handleChange = (e)=>{
    const{name, value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }));
  };


  const handleSubmit = async (e) =>{
    e.preventDefault(),
    console.log(user)
  }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Create Your Account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Join us today! It's quick and easy
          </p>
          {/* Name Input */}
          <div className="mb-4">
            <Label>Full Name</Label>
            <Input
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              type="text"
              id="name"
            ></Input>
          </div>
          <div className="mb-4">
            <Label>Email Address</Label>
            <Input
              placeholder="Enter Your Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            ></Input>
          </div>

          <div className="mb-4">
            <Label>Role</Label>
            <RadioGroup className="flex gap-8 mt-1">
              <div className="flex items-center space-x-2">
                {/* <RadioGroupItem value={user.role} id="role" /> */}
                <Input
                  type="radio"
                  id="role"
                  name="role"
                  value="student"
                  checked={user.role === "student"}
                  onChange={handleChange}
                ></Input>
                <Label htmlFor="role">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="role2"
                  name="role"
                  value="instructor"
                  checked={user.role === "instructor"}
                  onChange={handleChange}
                ></Input>
                <Label htmlFor="role">Instructor</Label>
              </div>
            </RadioGroup>
            <div>
              <Button
                onClick={handleSubmit}
                className="w-full bg-blue-500 mt-4 hover:bg-blue-600"
              >
                Signup
              </Button>
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;