import game from "../assets/game.png";
import ecommerce from "../assets/ecommerce.png";
import memory from "../assets/memory.png";
import quiz from "../assets/quiz.png";
import track from "../assets/track.png";
import music from "../assets/music.png"; // Added import

const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    technologies: "Html, Css, JS",
    image: ecommerce,
    deploy: "https://e-commerce-steel-gamma.vercel.app/",
    github: "https://github.com/sumiya2431/e-commerce",
  },
  {
    id: 2,
    name: "2048-Game",
    technologies: "Html & Css",
    image: game,
    deploy: "https://graceful-frangollo-6c72cd.netlify.app/",
    github: "https://github.com/sumiya2431/game-2048",
  },
  {
    id: 3,
    name: "Memory-Card",
    technologies: "Html, Css, Javascript",
    image: memory,
    deploy: "https://memory-card-game-omega-tawny.vercel.app/", // Corrected deploy link
    github: "https://github.com/sumiya2431/memory-card",
  },
  {
    id: 3,
    name: "Music-Player",
    technologies: "Html, Css, JS",
    image: music,
    deploy: "https://mymusic-six-sigma.vercel.app/",
    github: "https://github.com/sumiya2431/mymusic",
  },
  {
    id: 4, // Changed id to 5
    name: "Finance-Tracker",
    technologies: "Html, Css, Javascript, React.js",
    image: track,
    deploy: "https://finance-tracker.vercel.app/", // Corrected deploy link
    github: "https://github.com/sumiya2431/tracker",
  },
  {
    id: 5,
    name: "Quiz",
    technologies: "Html, Css, JS",
    image: quiz,
    deploy: "https://quiz-sigma-ecru.vercel.app/",
    github: "https://github.com/sumiya2431/QUIZ",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <img
                src={project.image}
                alt={`${project.name} Screenshot`}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3
                id={`project-title-${project.id}`}
                className="text-2xl font-bold mb-2"
              >
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View on GitHub
                </a>
                <a
                  href={project.deploy}
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} deployed version`}
                >
                  View Deployed Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;






// import game from "../assets/game.png";
// import ecommerce from "../assets/ecommerce.png";
// import memory from "../assets/memory.png";
// import quiz from "../assets/quiz.png";
// import track from "../assets/track.png";

// const projects = [
//   {
//     id: 1,
//     name: "E-commerce Website",
//     technologies: "Html, Css, JS",
//     image: ecommerce,
//     deploy: "https://e-commerce-steel-gamma.vercel.app/",
//     github: "https://github.com/sumiya2431/e-commerce",
//   },
//   {
//     id: 2,
//     name: "2048-Game",
//     technologies: "Html & Css",
//     image: game,
//     deploy: "https://graceful-frangollo-6c72cd.netlify.app/",
//     github: "https://github.com/sumiya2431/game-2048",
//   },
//   {
//     id: 3,
//     name: "Memory-Card",
//     technologies: "Html, Css, Javascript",
//     image: memory,
//     deploy: "https://vercel.com/sumiyas-projects-329babe1/memory-card-game",
//     github: "https://github.com/sumiya2431/memory-card",
//   },
//   {
//     id: 4,
//     name: "Music-Player",
//     technologies: "Html, Css, JS",
//     image: music,
//     deploy: "https://mymusic-six-sigma.vercel.app/",
//     github: "https://github.com/sumiya2431/mymusic",
//   },
//   {
//     id: 3,
//     name: "Finance-Tracker",
//     technologies: "Html, Css, Javascript,React.js",
//     image: track,
//     deploy: "https://vercel.com/sumiyas-projects-329babe1/finance-traker",
//     github: "https://github.com/sumiya2431/tracker",
//   },
//   {
//     id: 6,
//     name: "Quiz",
//     technologies: "Html, Css, JS",
//     image: quiz,
//     deploy: "https://quiz-sigma-ecru.vercel.app/",
//     github: "https://github.com/sumiya2431/QUIZ",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
//               transform transition-transform duration-300 hover:scale-105"
//               role="article"
//               aria-labelledby={`project-title-${project.id}`}
//             >
//               <img
//                 src={project.image}
//                 alt={`${project.name} Screenshot`}
//                 className="rounded-lg mb-4 w-full h-48 object-cover"
//               />
//               <h3
//                 id={`project-title-${project.id}`}
//                 className="text-2xl font-bold mb-2"
//               >
//                 {project.name}
//               </h3>
//               <p className="text-gray-400 mb-4">{project.technologies}</p>
//               <div className="flex space-x-4">
//                 <a
//                   href={project.github}
//                   className="inline-block bg-gradient-to-r 
//                   from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`View ${project.name} on GitHub`}
//                 >
//                   View on GitHub
//                 </a>
//                 <a
//                   href={project.deploy}
//                   className="inline-block bg-gradient-to-r 
//                   from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`View ${project.name} deployed version`}
//                 >
//                   View Deployed Project
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;






// import game from "../assets/game.png";
// import ecommerce from "../assets/ecommerce.png";
// import memory from "../assets/memory.png";
// import music from "../assets/music.png";

// const projects = [
//     {
//       id: 1,
//       name: "E-commerce Website",
//       technologies: "Html,Css,JS",
//       image:ecommerce,
//       deploy:"https://e-commerce-steel-gamma.vercel.app/",
//       github: "https://github.com/sumiya2431/e-commerce",
//     },
//     {
//       id: 2,
//       name: "2048-Game",
//       technologies: "Html & css",
//       image:game,
//       deploy:"https://graceful-frangollo-6c72cd.netlify.app/",
//       github: "https://github.com/sumiya2431/game-2048",
//     },
//     {
//       id: 3,
//       name: "Memory-Card",
//       technologies: "Html,css,Javascript",
//       image:memory,
//       deplo:"https://vercel.com/sumiyas-projects-329babe1/memory-card-game",
//       github: "https://github.com/sumiya2431/memory-card",
//     },
//     {
//       id: 4,
//       name: "Music-Player",
//       technologies: "Html,Css,JS",
//       image:music,
//       deploy:"https://mymusic-six-sigma.vercel.app/",
//       github: "https://github.com/sumiya2431/mymusic",
//     },
//   ];
  
//   const Projects = () => {
//     return (
//       <div className="bg-black text-white py-20" id="project">
//         <div className="container mx-auto px-8 md:px-16 lg:px-24">
//           <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
//                 transform transition-transform duration-300 hover:scale-105"
//                 role="article"
//                 aria-labelledby={`project-title-${project.id}`}
//               >
//                 <img
//                   src={project.image}
//                   alt={`${project.name} Screenshot`}
//                   className="rounded-lg mb-4 w-full h-48 object-cover"
//                 />
//                 <h3
//                   id={`project-title-${project.id}`}
//                   className="text-2xl font-bold mb-2"
//                 >
//                   {project.name}
//                 </h3>
//                 <p className="text-gray-400 mb-4">{project.technologies}</p>
//                 <div className="flex space-x-4">
 

//                 <a
//                   href={project.github}
//                   className="inline-block bg-gradient-to-r 
//                   from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`View ${project.name} on GitHub`}
//                 >
//                   View on GitHub
//                 </a>
              
//                 <a
//                   href={project.deploy}
//                   className="inline-block bg-gradient-to-r 
//                   from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`View ${project.name} on GitHub`}
//                 >
//                   project-deploy
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Projects;
  