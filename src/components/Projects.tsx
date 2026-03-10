"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Liveness Detection System",
    description:
      "Real-time spoof detection using TensorFlow Lite, MediaPipe and CameraX.",
    image: "/liveness.png",
    tech: ["Kotlin", "TensorFlow Lite", "CameraX"],
    github: "#"
  },
  {
    title: "Face Recognition Attendance",
    description:
      "Android attendance system with face recognition and camera integration.",
    image: "/attendance.png",
    tech: ["Kotlin", "CameraX", "REST API"],
    github: "#"
  }
]

export default function Projects() {

  return (

    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-20">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition overflow-hidden"
            >

              {/* Project Image */}

              <div className="relative h-52">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}

                <div className="flex gap-2 flex-wrap mb-4">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Links */}

                <a
                  href={project.github}
                  className="text-purple-400 text-sm hover:underline"
                >
                  GitHub →
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}