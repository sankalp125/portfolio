"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {

  return (

    <footer className="py-10 border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sankalp Tiwari. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">

          <a
            href="https://github.com/sankalp125"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/my-profile-sankalp"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:sankalp.tiwari125@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>

    </footer>

  )

}