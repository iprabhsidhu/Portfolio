import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always interested in hearing about new projects and opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <Mail className="text-blue-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              prabhdeepsidhu310@gmail.com
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="flex justify-center gap-6 mb-4">
              <Linkedin className="text-blue-500" size={40} />
              <Github className="text-blue-500" size={40} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Social</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/iprabhsidhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/iprabhsidhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
