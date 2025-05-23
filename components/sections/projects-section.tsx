"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, ExternalLink, Sparkles, Zap } from "lucide-react"

export default function ProjectsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Vedant Pandey's Personal Portfolio is a modern, responsive web application designed to showcase his skills, projects, and professional journey. Built using React, Tailwind CSS, and TypeScript, the portfolio emphasizes clean design and efficient performance. The project leverages Vite for rapid development and bundling, ensuring a seamless and interactive user experience.",
      technologies: ["TypeScript", "JavaScript", "HTML", "React", "Tailwind CSS", "Vite", "PostCSS"],
      links: {
        code: "https://github.com/vedant22p/Personal-Portfolio",
        demo: null,
      },
      gradient: "from-violet-500/30 to-fuchsia-500/30",
      iconBg: "bg-violet-500/20",
      iconColor: "text-violet-300",
      tagBg: "bg-violet-900/40",
      tagText: "text-violet-200",
      tagBorder: "border-violet-700/50",
      tagHoverBg: "group-hover:bg-violet-500/30",
      tagHoverText: "group-hover:text-violet-100",
      tagHoverBorder: "group-hover:border-violet-400/50",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "WhatsApp Chat Analyzer",
      description:
        "Achieved 25% increase in user engagement by developing a Python-based web application for personalized WhatsApp chat analysis. Enhanced communication by introducing Group and Personal Chat Analysis, monitoring 100+ activities and 10,000 messages. Added NLP Pipeline for sentiment analysis and modularized utilities for data visualization.",
      technologies: ["Python", "NLP", "Matplotlib", "Seaborn", "Hugging Face"],
      links: {
        code: "https://github.com/vedant22p/Whatsapp-Chat-Analyzer-WebApp-",
        demo: "https://huggingface.co/spaces/vedant22p/whatsapp-chat-analyzer",
      },
      gradient: "from-emerald-500/30 to-green-500/30",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
      tagBg: "bg-emerald-900/40",
      tagText: "text-emerald-200",
      tagBorder: "border-emerald-700/50",
      tagHoverBg: "group-hover:bg-emerald-500/30",
      tagHoverText: "group-hover:text-emerald-100",
      tagHoverBorder: "group-hover:border-emerald-400/50",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "AutoTabML",
      description:
        "Automated ML code generation for tabular data, reducing manual coding by 95%. Developed specialized agents for ML pipeline stages, improving development speed by 75%. Enhanced user productivity by 50% through integrated code execution and debugging capabilities.",
      technologies: ["Llamba-70B", "Machine Learning", "LLM", "Hugging Face", "Streamlit", "NLP", "Deep Learning"],
      links: {
        code: "https://github.com/vedant22p/AutoTabML",
        demo: "https://huggingface.co/spaces/singhtech/AutoTabML",
      },
      gradient: "from-sky-500/30 to-blue-500/30",
      iconBg: "bg-sky-500/20",
      iconColor: "text-sky-300",
      tagBg: "bg-sky-900/40",
      tagText: "text-sky-200",
      tagBorder: "border-sky-700/50",
      tagHoverBg: "group-hover:bg-sky-500/30",
      tagHoverText: "group-hover:text-sky-100",
      tagHoverBorder: "group-hover:border-sky-400/50",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Elite CPU Scheduler",
      description:
        "Developed a C++ program implementing seven CPU scheduling algorithms: FCFS, RR, SPN, SRT, HRRN, Feedback, and Aging. Engineered an integrated system to compare waiting times, optimizing scheduling performance and demonstrating proficiency in advanced algorithmic concepts.",
      technologies: ["C++", "OOP", "Operating Systems", "Algorithms"],
      links: {
        code: "https://github.com/vedant22p/CPU-Scheduling-Algorithms",
        demo: null,
      },
      gradient: "from-amber-500/30 to-orange-500/30",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-300",
      tagBg: "bg-amber-900/40",
      tagText: "text-amber-200",
      tagBorder: "border-amber-700/50",
      tagHoverBg: "group-hover:bg-amber-500/30",
      tagHoverText: "group-hover:text-amber-100",
      tagHoverBorder: "group-hover:border-amber-400/50",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Chest Cancer Classification",
      description:
        "Developed an end-to-end deep learning pipeline for chest cancer classification using medical imaging. Implemented CNN with transfer learning, achieving high accuracy through comprehensive data preprocessing, augmentation, and model evaluation using metrics like ROC-AUC.",
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "Deep Learning", "Medical Imaging"],
      links: {
        code: "https://github.com/vedant22p/End-to-End-Chest-Cancer-Classification",
        demo: null,
      },
      gradient: "from-rose-500/30 to-pink-500/30",
      iconBg: "bg-rose-500/20",
      iconColor: "text-rose-300",
      tagBg: "bg-rose-900/40",
      tagText: "text-rose-200",
      tagBorder: "border-rose-700/50",
      tagHoverBg: "group-hover:bg-rose-500/30",
      tagHoverText: "group-hover:text-rose-100",
      tagHoverBorder: "group-hover:border-rose-400/50",
      icon: <Sparkles className="h-5 w-5" />,
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
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-4xl font-bold mb-12 text-center"
      >
        <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mt-3 rounded-full"></div>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} custom={index} variants={itemVariants} className="group relative">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"></div>

            {/* Main card */}
            <div className="relative bg-zinc-800/90 rounded-xl overflow-hidden transition-all duration-500 group-hover:bg-zinc-800/95 group-hover:scale-[1.02] group-hover:-translate-y-2 cursor-pointer shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-amber-900/20">
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-7">
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`p-2.5 ${project.iconBg} rounded-lg ${project.iconColor} group-hover:bg-amber-500 group-hover:text-zinc-900 transition-all duration-300 shadow-md`}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-amber-50 transition-all duration-300">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Technology tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`text-xs ${project.tagBg} ${project.tagText} px-3 py-1.5 rounded-full border ${project.tagBorder} ${project.tagHoverBg} ${project.tagHoverText} ${project.tagHoverBorder} transition-all duration-300 font-medium shadow-sm`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-zinc-100 transition-colors duration-300 font-light tracking-wide">
                    {project.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  {project.links.code && (
                    <motion.a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-900 transition-all duration-300 font-medium shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code className="h-4 w-4" />
                      <span className="text-sm">View Code</span>
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 bg-zinc-700/70 text-zinc-200 rounded-lg border border-zinc-600/50 hover:bg-zinc-600 hover:text-white transition-all duration-300 font-medium shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-amber-300/80"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
