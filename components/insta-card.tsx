import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramReelCard = ({ title, views, reelUrl, thumbnail }) => {
  return (
    <a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-xs transform transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl animate-fade-in "
    >
      <div className="relative group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-80 object-contain transition-opacity duration-300 group-hover:opacity-80"
        />
        {/* Instagram tag */}
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <FaInstagram size={12} />
          Instagram
        </span>
        {/* Hover icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white bg-black bg-opacity-50 rounded-full p-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-base text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{views} views</p>
      </div>
    </a>
  );
};

export default InstagramReelCard;
