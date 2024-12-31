import TalkList from "./TalkList";

export function TalksSection() {
  return (
    <section id="talks" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Talks and Podcasts</h2>
        <p className="text-gray-400 mb-12">
          Discover engaging talks and insightful podcasts on software development.
        </p>
        <TalkList />
      </div>
    </section>
  );
}