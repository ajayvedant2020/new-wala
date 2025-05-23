"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, ExternalLink, Calendar, BadgeCheck } from "lucide-react"

export default function CertificationsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const certifications = [
    {
      id: 1,
      title: "Applied Machine Learning in Python",
      issuer: "University of Michigan",
      date: "2024",
      credentialID: "5eb1270999d5f9ccaa6ae839cdbd372a",
      description: "Comprehensive course covering machine learning concepts and practical implementation in Python.",
      link: "https://coursera.org/share/5eb1270999d5f9ccaa6ae839cdbd372a",
      gradient: "from-blue-500/30 to-cyan-500/30",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
      tagBg: "bg-blue-900/40",
      tagText: "text-blue-200",
      tagBorder: "border-blue-700/50",
      skills: ["Machine Learning", "Python", "Scikit-Learn", "Data Science"],
    },
    {
      id: 2,
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialID: "LKJGBNFJSSLM",
      description: "Fundamental course covering AWS cloud services and technical implementation.",
      link: "https://www.coursera.org/account/accomplishments/verify/LKJGBNFJSSLM",
      gradient: "from-orange-500/30 to-amber-500/30",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-300",
      tagBg: "bg-orange-900/40",
      tagText: "text-orange-200",
      tagBorder: "border-orange-700/50",
      skills: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
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
          Certifications
        </span>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mt-3 rounded-full"></div>
      </motion.h2>

      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-8">
        {certifications.map((cert, index) => (
          <motion.div key={cert.id} custom={index} variants={itemVariants} className="group relative">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"></div>

            {/* Main card */}
            <div className="relative bg-zinc-800/90 rounded-xl overflow-hidden transition-all duration-500 group-hover:bg-zinc-800/95 group-hover:scale-[1.02] group-hover:-translate-y-2 cursor-pointer shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-amber-900/20">
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Certificate icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${cert.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <Award
                      className={`h-8 w-8 ${cert.iconColor} group-hover:text-amber-300 transition-colors duration-300`}
                    />
                  </div>

                  {/* Certificate details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-amber-50 transition-all duration-300 mb-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center mb-3">
                      <span className="text-amber-400 font-medium">{cert.issuer}</span>
                      <span className="mx-2 text-zinc-500">•</span>
                      <div className="flex items-center text-zinc-400 text-sm">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {cert.date}
                      </div>
                    </div>

                    <p className="text-zinc-300 mb-4 text-sm leading-relaxed group-hover:text-zinc-100 transition-colors duration-300 tracking-wide">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="mb-5 flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs ${cert.tagBg} ${cert.tagText} px-3 py-1.5 rounded-full border ${cert.tagBorder} transition-all duration-300 font-medium shadow-sm`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center text-zinc-300 text-sm">
                        <BadgeCheck className="h-4 w-4 text-amber-500 mr-1.5" />
                        <span className="font-medium">Credential ID:</span>
                        <span className="ml-1.5 text-zinc-400">{cert.credentialID}</span>
                      </div>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-900 transition-all duration-300 font-medium shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Verify Certificate</span>
                      </motion.a>
                    </div>
                  </div>
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
                  <BadgeCheck className="h-5 w-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
