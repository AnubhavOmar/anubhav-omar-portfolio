import {
  FaLightbulb,
  FaCode,
  FaReact,
  FaTools,
  FaDatabase,
  FaPython,
  FaLaptopCode
} from 'react-icons/fa';

import profileImg from '../assets/profile_Img.jpg';
import projectImg1 from '../assets/GauMitra.png';              // GauMitra
import projectImg2 from '../assets/currency_converter.png'; // Currency Converter
import projectImg3 from '../assets/Snake_Game.png';         // Snake Game


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaCode,
      title: 'Problem Solver',
      description: 'I strengthen my problem-solving skills through Data Structures and Algorithms practice in C++ and regular coding challenges.',
      color: 'text-blue'
    },

    {
      icon: FaReact,
      title: 'Web Developer',
      description: 'I build responsive and interactive web applications using HTML, CSS, JavaScript, React, and modern frontend technologies.',
      color: 'text-purple'
   },

    {
      icon: FaLightbulb,
      title: 'Continuous Learner',
      description: 'I continuously explore React, MySQL, Python, software development, and AI/ML concepts through projects and hands-on learning.',
      color: 'text-pink'
  },

  {
  icon: FaDatabase,
  title: 'Database Enthusiast',
  description: 'I work with MySQL, SQL, and database concepts while strengthening my data management and query-writing skills.',
  color: 'text-green'
}

  ];



export const skills = [
  {
    title: 'Programming & DSA',
    icon: FaCode,
    description: 'Strengthening problem-solving skills through algorithms, data structures, and coding challenges.',
    tags: ['C++', 'DSA', 'Algorithms', 'LeetCode']
  },
  
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces using modern web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React']
  },

  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Working with relational databases and writing efficient SQL queries.',
    tags: ['MySQL', 'SQL', 'SQLite', 'HackerRank SQL']
  },

  {
    title: 'Python Development',
    icon: FaPython,
    description: 'Using Python and its libraries for problem solving, data handling, and project development.',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib']
  },

  {
    title: 'CS Fundamentals',
    icon: FaLaptopCode,
    description: 'Understanding core computer science concepts and software development principles.',
    tags: ['Operating Systems', 'DBMS', 'OOPs']
  },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Tools I use for development, version control, and project management.',
    tags: ['Git', 'GitHub', 'Figma' ,'VS Code']
  },

];


export const projects = [
{
title: "GauMitra",
description:
"A machine learning-based group project that identifies Indian cow breeds from images and provides breed-related information through a Flask web application.",
image: projectImg1,
tech: ["Python", "Flask", "PyTorch", "Machine Learning"],
demo: "#",
code: "https://github.com/Adityaomar1/GauMitra",
},

{
title: "Currency Converter",
description:
"A real-time currency converter that fetches exchange rates from an API and converts values between multiple currencies dynamically.",
image: projectImg2,
tech: ["HTML", "CSS", "JavaScript", "API"],
demo: "https://anubhavomar.github.io/currency-converter-app/",
code: "https://github.com/AnubhavOmar/currency-converter-app",
},

{
title: "Snake Game",
description:
"A browser-based Snake Game featuring keyboard controls, score tracking, high-score storage, and dynamic gameplay using JavaScript.",
image: projectImg3,
tech: ["HTML", "CSS", "JavaScript", "localStorage"],
demo: "https://anubhavomar.github.io/web-snake-game/",
code: "https://github.com/AnubhavOmar/web-snake-game",
}
];
