import React from 'react'

const Contact = () => {
    return (
      <div className="bg-black text-white py-20" id="contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            {/* Contact Details Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-green-400 to-blue-500 mb-4">
                Let's Talk
              </h3>
              <p className="mb-6">
                I am open to discussing web development projects or partnership opportunities.
              </p>
              <div className="mb-4">
                <strong>Email:</strong>{" "}
                <a href="sumiyashaik3131@gmail.com" className="text-green-400 hover:underline">
                  sumiyashaik3131@gmail.com
                </a>
              </div>
              <div className="mb-4">
                <strong>Phone:</strong> <span>+6300979000</span>
              </div>
              <div className="mb-4">
                <strong>Address:</strong> <span>Prashanth nagar,Madanapalli,Annamayya district</span>
              </div>
            </div>
  
            {/* Contact Form Section */}
            <div className="flex-1 w-full">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    rows="5"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
