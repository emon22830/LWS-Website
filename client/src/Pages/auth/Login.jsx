import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please Login in to your Account
        </p>
        {/* Name Input */}

        <div className="mb-4">
          <Label>Email Address</Label>
          <Input placeholder="Enter Your Email"></Input>
        </div>
        <div className="mb-4">
          <Label>Password</Label>
          <Input placeholder="Enter Your Password"></Input>
        </div>

        <div className="mb-4">
          <div>
            <Button className="w-full bg-blue-500 mt-4 hover:bg-blue-600">Login</Button>
            {/* Divider */}
            {/* <div className="flex-items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div> */}
            <p className="text-center mt-3">
              Don't Have an Account?
              <Link to="/signup" className="text-blue-500 hover:underline">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
