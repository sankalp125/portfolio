"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: any) => {

    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields")
      return
    }

    setLoading(true)

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setStatus("Message sent successfully!")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send message")
      }

    } catch (err) {
      setStatus("Network error")
    }

    setLoading(false)

  }

  return (

    <section id="contact" className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12"
        >
          If you're looking for an Android developer to build high-quality
          mobile applications, feel free to reach out.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-10 shadow-lg"
        >

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {status && (

            <p
              className={`mt-6 ${status.includes("success")
                ? "text-green-400"
                : "text-red-400"
                }`}
            >
              {status}
            </p>

          )}

        </motion.div>


        <div className="flex justify-center gap-8 mt-12">

          <a
            href="https://github.com/sankalp125"
            target="_blank"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500 hover:scale-110 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/my-profile-sankalp"
            target="_blank"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500 hover:scale-110 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:sankalp.tiwari125@gmail.com"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500 hover:scale-110 transition"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>

    </section>

  )

}