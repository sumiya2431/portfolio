// import React from 'react';
import mine from '../assets/mine.jpeg';
// Import icons
import { FaGithub, FaLinkedin, FaCode, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "DSA", width: "8/12", icon: <SiLeetcode className="text-2xl text-yellow-500" /> },
    { name: "HTML", width: "9/12", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
    { name: "CSS", width: "9/12", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
    { name: "JavaScript", width: "8/12", icon: <FaJsSquare className="text-2xl text-yellow-300" /> },
    { name: "React JS", width: "8/12", icon: <FaReact className="text-2xl text-blue-400" /> },
  ];

  const stats = [
    {
      label: "GitHub",
      link: "https://github.com/sumiya2431",
      icon: <FaGithub className="text-4xl text-gray-400 hover:text-white transition duration-300" />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/shaik-sumiya-7a116b342/",
      icon: <FaLinkedin className="text-4xl text-blue-500 hover:text-white transition duration-300" />,
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/u/shaiksumiya_jtbb2/",
      icon: <FaCode className="text-4xl text-yellow-500 hover:text-white transition duration-300" />,
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={mine}
            alt="About me image"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            I am a highly motivated and eager-to-learn aspiring full-stack developer, 
            passionate about creating innovative and user-friendly web applications.
            I am proficient in HTML, CSS, and JavaScript, and I am actively expanding 
            my skills in React.js and Node.js. I am eager to contribute my skills and 
            enthusiasm to a dynamic team and learn from experienced professionals in the field.
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div className="flex items-center justify-center" key={skill.name}>
                  <div className="w-2/12 flex items-center space-x-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <div className="grow bg-gray-800 rounded-full h-2.5 mx-2">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-${skill.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center space-x-6 text-center">
              {stats.map((stat) => (
                <a
                  key={stat.label}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  {stat.icon}
                  <p className="mt-2">{stat.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
















