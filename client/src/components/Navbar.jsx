import React from 'react';
import { GraduationCap } from "lucide-react";
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = false;
    return (
      // Navbar Section
      <div className="bg-gray-900 z-50 w-full fixed top-0">
        <div className="max-w-7xl mx-auto flex justify-between py-3">
          <Link to="/">
            {/* Logo Section */}
            <div className="flex items-center gap-2 ">
              <GraduationCap className="text-gray-300 w-10 h-10" />
              <h1 className="text-gray-300 text-2xl font-bold">Logo</h1>
            </div>
          </Link>

          {/* Menu Section */}

          <nav>
            <ul className="flex gap-7 text-xl items-center font-semibold text-white">
              <Link to="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="/courses">
                <li className="cursor-pointer">Courses</li>
              </Link>
              {!user ? (
                <div className="flex gap-3">
                  <Link to="/login">
                    <Button className="bg-blue-500 hover:bg-gray-800 cursor-pointer">
                      Login
                    </Button>
                  </Link>
                  <Link to = '/signup'>
                    <Button className="bg-gray-700 hover:bg-gray-800 cursor-pointer">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                    Logout
                  </Button>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
};

export default Navbar;