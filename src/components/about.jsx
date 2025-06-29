"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Wrench, Clock, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    rating: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        experience: 35,
        projects: 1000,
        clients: 500,
        rating: 4.9,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          experience: Math.floor(targets.experience * progress),
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          rating: Number((targets.rating * progress).toFixed(1)),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:px-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Omprakash Kumavat
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With over 15 years of experience in civil construction, we deliver
            exceptional quality and reliability in every project.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              Professional Excellence in Construction
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Omprakash Kumavat brings years of expertise in civil construction,
              specializing in residential and commercial projects. Our
              commitment to quality craftsmanship and customer satisfaction has
              made us a trusted name in the industry.
            </p>

            <div className="space-y-4">
              {[
                "Licensed and insured contractor",
                "Quality materials and workmanship",
                "Timely project completion",
                "Competitive pricing",
                "Customer satisfaction guarantee",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((index) => {
              let content;
              if (index === 0) {
                content = (
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {counts.experience}+
                    </div>
                    <div className="text-slate-600">Years Experience</div>
                  </CardContent>
                );
              } else if (index === 1) {
                content = (
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {counts.projects}+
                    </div>
                    <div className="text-slate-600">Projects Completed</div>
                  </CardContent>
                );
              } else if (index === 2) {
                content = (
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {counts.clients}+
                    </div>
                    <div className="text-slate-600">Happy Clients</div>
                  </CardContent>
                );
              } else {
                content = (
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {counts.rating}
                    </div>
                    <div className="text-slate-600">Client Rating</div>
                  </CardContent>
                );
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                    {content}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
