import React from "react";
import { experiences } from "@/data/experienceData";
import ExperienceIcon from "@/components/Icons";

interface ExperienceItemProps {
  company: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  date,
  description,
}) => (
  <div className="flex">
    <ExperienceIcon />
    <div className="flex-grow">
      <div className="flex items-center mb-2">
        <span className="bg-gray-700 text-white text-sm py-1 px-2 rounded mr-3">
          {date}
        </span>
        <h3 className="text-xl font-semibold">{company}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-y-12"> 
      <h2 className="text-5xl font-bold ">Mi Experiencia</h2>
      <div className="flex flex-col gap-y-14">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
