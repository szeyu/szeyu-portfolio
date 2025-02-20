import SpotlightCard from '@/components/ui/Components/SpotlightCard/SpotlightCard';
import RotatingText from '@/components/ui/TextAnimations/RotatingText/RotatingText';
import { hackathonAchievements } from '@/data/projects';

export default function HackathonSection() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
          <RotatingText
            texts={['🏆 Hackathon Highlights', '💻 Coding Competitions', '🌟 Tech Challenges']}
            mainClassName="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            rotationInterval={3000}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hackathonAchievements.map((achievement, index) => (
            <SpotlightCard 
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm"
              spotlightColor="rgba(168, 85, 247, 0.2)"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {achievement.title}
                </h3>
                <p className="text-2xl text-purple-400 font-bold">
                  {achievement.position}
                </p>
                <p className="text-gray-300">
                  {achievement.project}
                </p>
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
                <a 
                  href={achievement.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>View on GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
} 