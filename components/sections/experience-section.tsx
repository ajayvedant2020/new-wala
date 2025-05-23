"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const experience = [
    {
      position: "Data Science Intern",
      company: "ThinkSage",
      period: "January 2024 - March 2024",
      location: "Remote",
      description:
        "Working as a Data Science Intern, focusing on implementing machine learning solutions and data analysis.",
      status: "Completed",
    },
    {
      position: "SDE Intern",
      company: "ITJOBSXS",
      period: "October 2023 - April 2024",
      location: "Remote",
      description: "Working as a Software Development Engineer Intern, developing and maintaining web applications.",
      status: "Completed",
    },
    {
      position: "Text Content Creator",
      company: "PhysicsWallah",
      period: "May 2022 - November 2022",
      location: "Remote",
      description: "Created and curated educational content for physics courses.",
      status: "Completed",
    },
    {
      position: "Machine Learning Intern",
      company: "Eduversity",
      period: "June 2022 - September 2022",
      location: "Remote",
      description:
        "Worked on implementing machine learning algorithms and developing AI solutions for educational platforms.",
      status: "Completed",
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
        className="text-3xl font-bold mb-10 flex items-center"
      >
        <Briefcase className="mr-3 text-amber-500" />
        Experience
        <div className="w-12 h-1 bg-amber-500 mt-2 ml-auto"></div>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative pl-8 border-l-2 border-amber-500/30 ml-6 space-y-8"
      >
        {experience.map((item, index) => (
          <motion.div key={index} custom={index} variants={itemVariants} className="relative">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" },
                },
              }}
              className="absolute -left-[41px] top-6 w-6 h-6 rounded-full bg-amber-500 border-4 border-zinc-900 z-10"
            />

            {/* Card connector */}
            <div className="absolute -left-8 top-8 w-6 h-0.5 bg-amber-500/50" />

            {/* Content card */}
            <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-100 mb-1">{item.position}</h3>
                  <h4 className="text-xl text-amber-500 mb-3">{item.company}</h4>
                </div>
                <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-xs">
                  {item.period}
                </div>
              </div>

              <p className="text-zinc-300 mb-4">{item.description}</p>

              <div className="flex items-center text-zinc-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
