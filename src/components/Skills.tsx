"use client"

import { motion } from "framer-motion"

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "CameraX",
  "Android SDK",
  "REST APIs",
  "Ktor",
  "Flask",
  "Firebase",
  "Git",
  "TensorFlow Lite"
]

export default function Skills() {

  return (

    <section id="skills" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-20">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500 transition"
            >

              <span className="text-lg font-medium">
                {skill}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}