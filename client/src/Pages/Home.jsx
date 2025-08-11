import React from 'react';
import Hero from "../components/Hero";
import{coursesJson} from './Courses'
import CourseCard from '@/components/CourseCard';



const Home = () => {
    return (
      <div>
        <Hero />

        <div className='pt-14'>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Courses
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Explore our curated courses to boost your skills and career. Whether
            you're a beginner or an expert, we have something for everyone.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {coursesJson.slice(0, 7).map((course) => {
            return <CourseCard course={course} />;
          })}
        </div>
      </div>
    );
};

export default Home;