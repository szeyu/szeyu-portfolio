import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';

interface FocusArea {
  title: string;
  subtitle: string;
  description: string;
  iconPath: string;
}

interface SkillGridProps {
  focusAreas: FocusArea[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  })
};

export default function SkillGrid({ focusAreas }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {focusAreas.map((area, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="h-full"
        >
          <div 
            className="h-full rounded-xl overflow-hidden relative p-1 group"
            style={{
              background: `linear-gradient(135deg, ${
                index % 2 === 0 ? theme.colors.accent.blue : theme.colors.accent.purple
              }50, transparent)`,
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
              style={{
                background: `linear-gradient(135deg, ${
                  index % 2 === 0 ? theme.colors.accent.blue : theme.colors.accent.purple
                }, transparent)`,
              }}
            />
            
            {/* Inner content */}
            <div className="relative bg-[#112240] rounded-lg h-full p-6 md:p-8 backdrop-blur-sm overflow-hidden">
              {/* Icon */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500 ${
                  index % 2 === 0 ? 'text-[#64FFDA]' : 'text-[#A78BFA]'
                }`}
              >
                <path d={area.iconPath} />
              </svg>
              
              {/* Title */}
              <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                index % 2 === 0 ? 'from-[#64FFDA] to-[#4EEBC5]' : 'from-[#A78BFA] to-[#8B5CF6]'
              }`}>
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/75 mt-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                {area.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}