"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [

  {
    title: "AI Liveness Detection System",
    description:
      "Real-time spoof detection system using TensorFlow Lite, MediaPipe and CameraX for secure face authentication.",
    image: "/liveness.png",
    tech: ["Kotlin", "TensorFlow Lite", "MediaPipe", "CameraX"],
    github: "#"
  },

  {
    title: "Face Recognition Attendance System",
    description:
      "AI-powered Android attendance system with face recognition and liveness detection to prevent spoofing using photos or videos.",
    image: "/attendance.png",
    tech: ["Kotlin", "ML Kit", "TensorFlow Lite"],
    github: "#"
  },

  {
    title: "Product Management Android App",
    description:
      "Modern Android application built with Jetpack Compose and MVVM architecture that allows users to manage products with multiple images. Supports product creation, editing, deletion, image uploads, pull-to-refresh lists, and shimmer loading states.",
    image: "/product-android.png",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Hilt",
      "Retrofit",
      "Coil",
      "UCrop",
      "StateFlow",
      "Material3"
    ],
    github: "https://github.com/sankalp125/MarketPlaceApp"
  },

  {
    title: "Product Management Backend API",
    description:
      "Backend service built using Ktor and PostgreSQL providing secure REST APIs for product management, authentication, and image handling with JWT authentication.",
    image: "/product-backend.png",
    tech: [
      "Kotlin",
      "Ktor",
      "PostgreSQL",
      "JWT",
      "Coroutines",
      "REST API"
    ],
    github: "https://github.com/sankalp125/MarketPlace_Backend"
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
              transition={{ delay: index * 0.15 }}
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

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}

                <div className="flex flex-wrap gap-2 mb-5">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* GitHub Button */}

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block px-4 py-2 text-sm bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                >
                  View on GitHub
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}