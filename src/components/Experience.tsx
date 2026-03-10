"use client"

import { motion } from "framer-motion"

const experiences = [

  {
    role: "Software Developer",
    company: "Dainik Jagran",
    period: "Sep 2024 – Present",
    points: [
      "Developing Android applications using Kotlin and modern Android architecture.",
      "Working with CameraX, REST APIs and backend integrations.",
      "Building scalable backend APIs using Ktor and Flask."
    ]
  },

  {
    role: "Software Developer Trainee",
    company: "Dainik Jagran",
    period: "Feb 2024 – Sep 2024",
    points: [
      "Worked on Android app development using Kotlin.",
      "Implemented features and integrated REST APIs.",
      "Collaborated with team for debugging and feature delivery."
    ]
  }

]

export default function Experience() {

  return (

    <section id="experience" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-20">
          Work Experience
        </h2>

        <div className="relative border-l border-gray-800 pl-10 space-y-16">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* timeline dot */}

              <div className="absolute -left-[44px] top-1 w-4 h-4 bg-purple-500 rounded-full"></div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">

                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-purple-400 mt-1">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {exp.period}
                </p>

                <ul className="mt-4 space-y-2 text-gray-400 list-disc pl-5">

                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}