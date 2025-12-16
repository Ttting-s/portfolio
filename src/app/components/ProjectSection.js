"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
const ProjectSection = () =>{
  const projects = [
    { 
      id: 1,
      title: "Toohak Interactive Quiz Platform",
      tags: ["AWS", "TypeScript", "java"],
      description: "Developed a Kahoot-style quiz platform backend with TypeScript + Node.js + Express.js, supporting user authentication, quiz creation/editing, game sessions, answering flow, and statistics tracking.",
      fullDescription: ["Designed and implemented core RESTful APIs, including creating/deleting quiz questions, starting a game session, retrieving game status, and fetching current question data.",
        "Added secure password update logic with permission validation and robust error handling.",
        "Achieved 95%+ test coverage using Jest + Supertest, improved reliability under GitLab CI/CD."],
      image: "/task1.jpg",
    },
    {
      id: 2,
      title: "Dungeonmania Game Engine Development",
      tags: ["AWS", "Clo"],
      description: "Developed a grid-based dungeon game engine in Java, supporting entity interaction, combat resolution, item usage, goal evaluation, crafting mechanics, pathfinding and map logic.",
      fullDescription: ["Improved architecture and maintainability via legacy-code refactor and OOP Design Patterns (Compo-site/Strategy/Factory).",
        "Refactored crafting module into a rule-engine-style structure, decoupling validation from gameplay logic.",
        "Shipped features with backward compatibility and JUnit+CI/CD validation."],
      image: "/task1.jpg",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject);
    
    if (currentIndex === -1) {
      return null;
    }
    const next = (currentIndex + 1) % projects.length;

    setSelectedProject(projects[next].id);
  }

    const handlePrevProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject);
    
    if (currentIndex === -1) {
      return null;
    }
    const prev = (currentIndex - 1 + projects.length) %
    projects.length;

    setSelectedProject(projects[prev].id);
  }


  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            key={index} 
            className="bg-gray-800/30 backdrop-blur-sm 
            rounded-b-lg p-6 border border-gray-700/50 hover:border-(--primary)/50
            transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {
                  project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full
                      bg-(--primary)/20 text-purple-200 border border-(--primary)/30"
                    >
                      {tag}
                    </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {
        selectedProject && (
          <ProjectModal
            project={projects.find((project) => project.id ===
              selectedProject)}
              onClose={handleCloseModal}
              onNext={handleNextProject}
              onPrev={handlePrevProject}
          />
        )
      }
    </section>
  );
};
export default ProjectSection;