import CountUp from '@/components/ui/TextAnimations/CountUp/CountUp';
import GradientText from '@/components/ui/TextAnimations/GradientText/GradientText';
import { theme } from '@/lib/theme';

interface StatCardProps {
  value: number;
  suffix: string;
  title: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, title }) => {
    // console.log(`Rendering StatCard - Title: ${title}, Value: ${value}, Suffix: ${suffix}`);
    return (
    <div 
      className="relative group p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <GradientText
            colors={[theme.colors.accent.blue, theme.colors.accent.purple, theme.colors.accent.blue]} // Use theme colors
            animationSpeed={3}
            showBorder={false}
            className="text-4xl md:text-5xl font-bold"
        >
            <CountUp
                from={0}
                to={value}
                duration={2}
                className={`bg-clip-text text-transparent`}
            />
            <span className={`bg-clip-text text-transparent`}>
                {suffix}
            </span>
        </GradientText>
        <h3 className="text-lg md:text-xl text-gray-300 text-center">
          {title}
        </h3>
      </div>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
    </div>
  );
};

export default StatCard;