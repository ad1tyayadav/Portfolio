import React from "react";
import { Link } from "react-router-dom";

const TalkCard = ({ title, videoId, description, slug }) => {
  return (
    <Link to={`/talks/${slug}`} className="group">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <div className="relative w-full h-80 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TalkCard;