"use client"

import { motion } from "framer-motion"

export default function About() {

  return (

    <section id="about" className="py-32 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">

            I'm an Android Developer with over 2 years of experience
            building modern mobile applications using Kotlin and
            the Android ecosystem.

            I focus on creating scalable and high-performance
            mobile apps with clean architecture and strong
            backend integrations.

          </p>

          <p className="text-gray-400 leading-relaxed">

            Along with Android development, I also work with backend
            technologies like Ktor and Flask to build APIs that power
            mobile applications.

          </p>

        </motion.div>


        {/* RIGHT SIDE HIGHLIGHTS */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">
              2+
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Years Experience
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">
              10+
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Technologies
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">
              Android
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Kotlin Expert
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">
              Backend
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Ktor & Flask
            </p>
          </div>

        </motion.div>

      </div>

    </section>

  )

}