import React from 'react';
import CourseCard from '@/components/CourseCard';

// eslint-disable-next-line react-refresh/only-export-components
export const coursesJson = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    img: "https://example.com/images/web-development.jpg",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description:
      "Master JavaScript fundamentals and start building interactive web applications.",
    img: "https://example.com/images/javascript-course.jpg",
  },
  {
    id: 3,
    title: "React JS Complete Guide",
    description:
      "A complete guide to building modern web apps using React.js.",
    img: "https://example.com/images/react-course.jpg",
  },
  {
    id: 4,
    title: "Python Programming Essentials",
    description:
      "Learn Python from scratch — great for data science, web development, and automation.",
    img: "https://example.com/images/python-course.jpg",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description:
      "Understand the principles of design and user experience .",
    img: "https://example.com/images/ui-ux-course.jpg",
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    description:
      "Become a full-stack developer by mastering front-end and back-end technologies.",
    img: "https://example.com/images/fullstack-course.jpg",
  },
  {
    id: 7,
    title: "Data Structures & Algorithms",
    description:
      "Boost your problem-solving skills with a deep understanding of DSA in JavaScript.",
    img: "https://example.com/images/dsa-course.jpg",
  },
  {
    id: 8,
    title: "Mobile App Development with Flutter",
    description:
      "Build cross-platform mobile apps with Google’s Flutter framework.",
    img: "https://example.com/images/flutter-course.jpg",
  },
];

const Courses = () => {
  return (
    <div className='bg-gray-100 pt-14'>
      <div className='min-h-screen max-w-7xl mx-auto py-10'>
        <div className='px-4'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Our Courses</h1>
          <p className='text-center text-gray-600 mb-12'>
            Explore our curated courses to boost your skills and career. Whether you're a beginner or an expert, we have something for everyone.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {coursesJson?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
