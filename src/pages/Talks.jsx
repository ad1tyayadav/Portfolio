import React from "react";
import TalkList from "../components/TalkList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Talks = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-[75%] lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Talks and Podcasts</h2>
          <p className="text-gray-400 mb-12">
            Explore insightful talks and podcasts about development, React, and beyond.
          </p>
          <TalkList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Talks;