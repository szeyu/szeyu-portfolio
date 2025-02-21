import SpotlightCard from '@/components/ui/Components/SpotlightCard/SpotlightCard';
import { projectsData } from '@/data/projects';

export default function FeaturedProjectsSection() {
  return (
    <section 
      id="projects"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="relative group">
              <SpotlightCard
                className="p-6 bg-white/5 backdrop-blur-sm h-full"
                spotlightColor="rgba(167, 139, 250, 0.2)"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-purple-400">
                      {project.position} ({project.duration})
                    </span>
                  </div>

                  <p className="text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex space-x-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 