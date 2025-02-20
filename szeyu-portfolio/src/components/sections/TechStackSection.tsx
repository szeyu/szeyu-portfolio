import Image from "next/image";
import { techStackData } from "@/data/techStack";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { theme } from "@/lib/theme";

export default function TechStackSection() {
  return (
    <section className={`relative z-10 ${theme.layout.sectionPadding}`}>
      <div className={theme.layout.maxWidth}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
          Tech Stack
        </h2>

        {/* Table */}
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          {techStackData.map((category, index) => (
            <div
              key={index}
              className="flex items-center border-b border-gray-700 last:border-none min-h-[80px] px-6 hover:bg-opacity-10 hover:bg-teal-500 transition"
            >
              {/* Left Column: Category Name */}
              <div className="w-1/3 text-lg font-semibold flex items-center" style={{ color: theme.colors.text.secondary }}>
                {category.category}
              </div>

              {/* Right Column: Tech Logos */}
              <div className="w-2/3 flex flex-wrap items-center gap-4">
                {category.items.map((item, idx) => (
                  <TooltipProvider key={idx}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="group flex items-center justify-center">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 filter grayscale group-hover:grayscale-0 transition duration-300"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="text-sm font-semibold">{item.name}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
