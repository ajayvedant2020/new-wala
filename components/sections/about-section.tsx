"use client"

import { Code, Palette, Smartphone, Camera } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-amber-500" />,
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: <Code className="h-8 w-8 text-amber-500" />,
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-amber-500" />,
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: <Camera className="h-8 w-8 text-amber-500" />,
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        About Me
        <div className="w-12 h-1 bg-amber-500 mt-2"></div>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-zinc-300 mb-6 text-justify"
      >
        I’m a Data Scientist and AI Researcher from New Delhi, India, passionate about leveraging data to build intelligent systems that solve real-world problems. With hands-on experience in Machine Learning, NLP, and Deep Learning, I’ve built and deployed scalable AI applications and published impactful research in reputed Scopus-indexed conferences and journals.
        <br />
        <br />
        My work blends statistical rigor with modern tools like FastAPI, Power BI, TensorFlow, and Streamlit to craft data-driven solutions from NLP-powered chatbots to behavior analytics tools. Whether it's reducing query latency with LLMs or visualizing complex datasets interactively, I focus on making technology useful, efficient, and meaningful. With over 1400+ solved DSA problems, 10+ research papers, and top global rankings in competitions like Google Code Jam and Kickstart, I aim to bridge the gap between academic research and real-world AI innovation.
      </motion.p>

      {/* Animated Resume Button */}
      <motion.a
        href="https://drive.google.com/file/d/1uASwIwFia0D2q0pIN76mjK9Lvk0By1i-/view"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="inline-block mb-10 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition duration-300 shadow-lg"
      >
        Resume
      </motion.a>

      <h3 className="text-2xl font-bold mb-6">What I'm Doing</h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {services.map((service, index) => (
          <motion.div key={index} custom={index} variants={itemVariants}>
            <div className="bg-zinc-800 rounded-xl p-6 flex items-start">
              <div className="mr-4 mt-1">{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
