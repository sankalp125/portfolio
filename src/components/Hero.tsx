"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {

  return (

    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden px-6">

      {/* background glow */}

      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 blur-[200px] rounded-full"></div>

      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 blur-[200px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT SIDE TEXT */}

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
          >
            Sankalp Tiwari
          </motion.h1>
          <div className="h-[2px] w-40 mt-6 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse"></div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-2xl font-semibold text-blue-400"
          >
            <TypeAnimation
              sequence={[
                "Android Developer",
                2000,
                "Android Developer & Backend Engineer",
                2000,
                "Kotlin • Ktor • Flask",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-lg text-gray-400 max-w-xl"
          >

            I build high-performance Android applications using Kotlin,
            Jetpack libraries and modern Android architecture.

            I also develop backend APIs using Ktor and Flask to power
            scalable mobile applications and real-time systems.

          </motion.p>


          <div className="flex gap-3 mt-6 flex-wrap">

            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">
              Kotlin
            </span>

            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">
              Jetpack Compose
            </span>

            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">
              CameraX
            </span>

            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">
              Ktor
            </span>

            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm">
              Flask
            </span>

          </div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex gap-6"
          >
            <a href="#projects">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 transition">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="px-8 py-4 rounded-xl border border-gray-600 hover:bg-gray-800 transition">
                Contact Me
              </button>
            </a>

          </motion.div>

        </div>



        {/* RIGHT SIDE AVATAR */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          >

            {/* glass card */}

            <div className="relative bg-black/60 backdrop-blur-md p-4 rounded-full">

              <Image
                src="/avatar.png"
                alt="Sankalp Avatar"
                width={320}
                height={320}
                className="rounded-full"
              />

            </div>

          </motion.div>

        </motion.div>

      </div>



      {/* scroll indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >

        <span className="text-gray-400 text-sm tracking-widest">
          SCROLL
        </span>

        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />

        </div>

      </motion.div>

    </section>

  )

}