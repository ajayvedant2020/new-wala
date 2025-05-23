"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Database, Braces, Brain, Server, Languages } from "lucide-react"

export default function SkillsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const skillCategories = [
    {
      title: "Languages",
      icon: <Languages className="h-5 w-5" />,
      skills: ["Python", "C++", "SQL", "MySQL", "HTML", "CSS", "TypeScript"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      title: "Frameworks and Libraries",
      icon: <Braces className="h-5 w-5" />,
      skills: [
        "TensorFlow",
        "Scikit-Learn",
        "Keras",
        "OpenCV",
        "HuggingFace",
        "FastAPI",
        "Streamlit",
        "Pandas",
        "React",
        "Tailwind CSS",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Technologies and Tools",
      icon: <Server className="h-5 w-5" />,
      skills: ["AWS", "GitHub", "PowerBI", "MLflow", "Seaborn"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      title: "Data Science",
      icon: <Brain className="h-5 w-5" />,
      skills: ["Data Analysis", "Data Visualization", "Machine Learning", "Deep Learning", "NLP", "MLOps"],
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      title: "Core CSE",
      icon: <Database className="h-5 w-5" />,
      skills: ["Data Structures", "Algorithms", "OOPs", "Operating System", "DBMS"],
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400",
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-3xl font-bold mb-10 text-center"
      >
        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Technical Skills
        </span>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-3 rounded-full"></div>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            custom={categoryIndex}
            variants={categoryVariants}
            className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-zinc-800/90 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-lg bg-zinc-700/50 ${category.iconColor} mr-3`}>{category.icon}</div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    className="px-3 py-1.5 bg-zinc-700/60 hover:bg-zinc-600/80 text-zinc-200 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default border border-zinc-600/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
