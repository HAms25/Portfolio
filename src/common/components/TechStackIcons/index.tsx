import { DeviconVitejs } from "@/components/Icons";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const techStackLinks = [
    {
        id: 1,
        icon: FaReact,
        label: "React",
        color: "text-blue-500"
    },
    {
        id: 2,
        icon: SiTailwindcss,
        label: "TailwindCSS",
        color: "text-teal-500"
    },
    {
        id: 3,
        icon: DeviconVitejs,
        label: "Vite",
    },
    {
        id: 4,
        icon: SiJavascript,
        label: "JavaScript",
        color: "text-yellow-500"
    },
    {
        id: 5,
        icon: SiTypescript,
        label: "TypeScript",
        color: "text-blue-600"
    },
    {
        id: 6,
        icon: TbBrandNextjs,
        label: "Next.js",
        color: "text-black-200"
    }
];

export default function TechStackIcons() {
  return (
    <div className="mt-16 px-4">
            <h2 className="text-2xl font-semibold text-center mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {techStackLinks.map(({ id, icon: Icon, label, color }) => (
                    <a
                        key={id}
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 p-4 rounded-lg 
                                 hover:bg-gray-200/50 dark:hover:bg-gray-900/50 transition-all duration-300"
                    >
                        <Icon className={`w-12 h-12 ${color}  group-hover:scale-110 transition-transform`} />
                        <span className="text-sm">
                            {label}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
