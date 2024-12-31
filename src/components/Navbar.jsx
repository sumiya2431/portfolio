import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
    <div className="container py-2 flex justify-center md:justify-between items-center">
      <div className="text-2xl font-bold hidden md:inline">Sumiya</div>
      <div className="space-x-10">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
        <a href="#project" className="hover:text-yellow-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
      </div>
      <a
        href="#contact"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
      >
        Contact Me
      </a>
    </div>
  </nav>
  );
};

export default Navbar;










// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
//     <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <div className='text-2xl font-bold hidden md:inline'>Sumiya</div>
//             <div className='space-x-6'>
//                 <a href="#home"className='hover:text-yellow-400'>Home</a>
//                 <a href="#about"className='hover:text-yellow-400'>About</a>
//                 <a href="#projects"className='hover:text-yellow-400'>Projects</a>
//                 <a href="#contact"className='hover:text-yellow-400'>Contact</a>
//             </div>

//             <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden">
//                 Connect Me
//             </button>
//             {/* <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button> */}
//         </div>
    
//     </nav>
//   )
// }
// export default Navbar