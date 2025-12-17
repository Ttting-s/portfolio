import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from "react";
export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-800/75 flex
      items-center justify-center z-50" onClick={handleOutsideClick}
      ref={modalRef}>
      <div ref={modalRef} className="bg-gray-900 rounded-lg max-w-4xl
        w-11/12 max-h-[90vh] overflow-y-auto p-12 h-[83.333%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-purple-50">
            {project.title}
          </h2>
          <button 
            onClick={onClose}
            className="text-purple-50 hover:text-(--primary) rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.fullDescription.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-60 w-full md:w-1/2 mt-4">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex
          justify-between w-11/12 max-w-4xl">
              <button
                onClick={onPrev}
                className="bg-gray-800/50 rounded-full p-2
                hover:bg-gray-800/70 transition-colors -translate-x-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={onNext}
                className="bg-gray-800/50 rounded-full p-2
                hover:bg-gray-800/70 transition-colors -translate-x-[120%]"
              >
                <ChevronRight size={24} />
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}