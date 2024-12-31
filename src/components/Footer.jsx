import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex justify-center pb-16 w-[100vw] p-6 h-[60vh]">
        <iframe src="https://shrutikapoor.substack.com/embed" width="800" height=""></iframe>
      </div>
      <div className="container mx-auto text-center">
        {/* Profile Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://pbs.twimg.com/media/FTaAbsHVUAEVW46?format=jpg&name=small"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-xl font-semibold mt-2">Shruti Kapoor</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 mt-4 text-sm">
          <Link to="https://youtube.com/@shrutikapoor08" className="hover:text-cyan-400 transition-colors">
            YouTube
          </Link>
          <Link to="/blogs" className="hover:text-cyan-400 transition-colors">
            Blogs
          </Link>
          <Link to="https://discord.gg/8TNEQR7H" className="hover:text-cyan-400 transition-colors">
            Discord
          </Link>
          <Link to="https://www.oreilly.com/library/view/react-fundamentals-building/0636920981428/" className="hover:text-cyan-400 transition-colors">
            Courses
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;