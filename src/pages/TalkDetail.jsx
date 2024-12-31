import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import talks from "../data/talksVideos";
import Link from "../components/Link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TalkDetail = () => {
  const { slug } = useParams();
  const talk = talks.find((t) => t.slug === slug);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!talk) {
    return <h1 className="text-white text-center mt-20">Talk not found</h1>;
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white py-16">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">{talk.title}</h1>

          <div className="mb-8">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${talk.videoId}`}
              title={talk.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* "More Talks" section */}
          <h3 className="text-2xl font-bold mt-8 mb-4">More Talks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto lg:grid-cols-3 gap-8">
            {talks
              .filter((t) => t.slug !== slug)
              .map((relatedTalk, index) => (
                <Link
                  to={`/talks/${relatedTalk.slug}`}
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  {/* Video iframe */}
                  <div className="relative w-full h-60 overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${relatedTalk.videoId}`}
                      title={relatedTalk.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">
                      {relatedTalk.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{relatedTalk.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default TalkDetail;