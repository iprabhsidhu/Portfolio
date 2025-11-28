import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Shadow World',
      description: 'A stunning open-world environment RPG developed while learning and starting into the game development.',
      category: 'Game Development',
      image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Unreal Engine 5', 'Blueprint', 'Gameplay', 'C++', 'RPG'],
    },
    {
      id: 2,
      title: 'Last Battalion',
      description: 'An extraction genre military shooter based in post apocolyptic world.',
      category: 'Extraction',
      image: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UE5', 'Multiplayer', 'C++', 'Extraction'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in Unreal Engine, in the gameplay programming and game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-500 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
