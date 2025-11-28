import { Code, Paintbrush, Zap, Box, Layers, Cpu } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

function Skills() {
  const skills: Skill[] = [
    {
      icon: <Code size={32} />,
      title: 'Programming',
      description: 'Strong foundation in C++ and Blueprint scripting',
      items: ['C++', 'Blueprint', 'HLSL/GLSL'],
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Technical Art',
      description: 'Creating stunning visuals and optimized materials',
      items: ['Material Editor', 'Niagara', 'Lighting', 'Post-Processing'],
    },
    {
      icon: <Zap size={32} />,
      title: 'Gameplay Systems',
      description: 'Implementing robust and scalable game mechanics',
      items: ['AI Programming', 'Animation Systems', 'UI/UX', 'Multiplayer'],
    },
    {
      icon: <Box size={32} />,
      title: '3D Content',
      description: 'Working with industry-standard 3D tools',
      items: ['Blender', 'Quixel'],
    },
    {
      icon: <Layers size={32} />,
      title: 'Virtual Production',
      description: 'Real-time filmmaking and LED wall workflows',
      items: ['Sequencer'],
    },
    {
      icon: <Cpu size={32} />,
      title: 'Optimization',
      description: 'Performance profiling and optimization techniques',
      items: ['Profiling', 'LOD Systems', 'Memory Management', 'Streaming'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set covering all aspects of Unreal Engine development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border-2 border-gray-100 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
