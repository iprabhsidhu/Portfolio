function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm a passionate Game developer specializing in creating
              high-quality, immersive experiences. With a deep understanding of
              real-time rendering, gameplay programming, I bring
              creative visions to life.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              My expertise spans across game development, Level Design,
              and interactive experiences. I'm constantly pushing
              the boundaries of what's possible in real-time 3D.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's crafting stunning environments, implementing complex gameplay
              mechanics, or optimizing performance, I'm dedicated to delivering
              exceptional results.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Headshot.png"
                alt="Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
