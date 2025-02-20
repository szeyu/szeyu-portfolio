interface FeaturedProject {
  title: string;
  event: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
  features: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "SwiftSettle",
    event: "Deriv Hack 25",
    description: "AI-powered dispute resolution system that automates the settlement process using advanced language models and fairness algorithms.",
    image: "/projects/swiftsettle.png",
    github: "https://github.com/yourusername/swiftsettle",
    demo: "https://swiftsettle.demo",
    tech: ["Python", "LangChain", "React", "Node.js"],
    features: [
      "Natural language processing for dispute analysis",
      "Automated settlement suggestions",
      "Real-time negotiation platform"
    ]
  },
  // ... other projects
];

export const hackathonAchievements = [
  {
    title: "UM Datathon 2024",
    position: "🥇 Champion",
    project: "Bitcoin Quant Trading",
    description: "Developed an AI-powered quantitative trading system for cryptocurrency markets",
    github: "https://github.com/yourusername/bitcoin-quant"
  },
  // ... other achievements
]; 