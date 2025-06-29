"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Wrench } from "lucide-react";
import Image from "next/image";
import QuoteModal from "@/components/quote-modal";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative py-16 md:py-20 bg-gradient-to-br from-slate-50 to-amber-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4K')]"></div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 mx-auto mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Trusted Civil Contractor</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Building Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {" "}
                  Dreams
                </span>
                <br />
                Into Reality
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Professional civil contractor with expertise in plumbing,
                lighting, furniture, tiling, granite, and POP work. Quality
                construction solutions tailored to your needs.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <QuoteModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </QuoteModal>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 hover:bg-slate-50 bg-transparent w-full"
                  onClick={() => smoothScrollTo("#projects")}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-around  gap-5 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                {
                  icon: Award,
                  value: "35+",
                  label: "Years Experience",
                  color: "blue",
                },
                {
                  icon: Wrench,
                  value: "1000+",
                  label: "Projects Done",
                  color: "green",
                },
                {
                  icon: Users,
                  value: "500+",
                  label: "Happy Clients",
                  color: "purple",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-lg mb-3 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </motion.div>
                  <div className="text-xl font-bold text-slate-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full max-w-[500px] mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Construction work by Omprakash Kumavat"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
