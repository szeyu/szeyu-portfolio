import StatCard from '@/components/ui/Components/StatCard/StatCard'; // Import the new StatCard component
import { stats } from '@/data/stats';

export default function StatsSection() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}