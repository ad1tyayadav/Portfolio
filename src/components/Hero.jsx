import React from 'react';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white sm:pt-10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl sm:w-[38vw] font-bold">
              Trust me, I'm a{' '}
              <span className="text-cyan-400">software engineer.</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-2xl">
              On a mission to make you the best developer you are meant to be.
            </p>
            <div className="pt-4">
              <a
                href="https://discord.gg/8TNEQR7H"
                className="bg-[#5865F2] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://pbs.twimg.com/media/FTaAbsHVUAEVW46?format=jpg&name=small"
              alt="Profile"
              className="rounded-3xl shadow-2xl"
            />

            {/* Social Media */}
            <div className="flex items-center space-x-4 gap-6 relative top-10 left-16 ml-8">
              <a
                href="https://github.com/shrutikapoor08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shrutikapoor08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@shrutikapoor08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/shrutikapoor08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero