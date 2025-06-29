"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Lightbulb,
  Sofa,
  Grid3X3,
  Mountain,
  Palette,
  ArrowRight,
} from "lucide-react";
import QuoteModal from "@/components/quote-modal";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Plumbing Services",
      description:
        "Complete plumbing solutions including installation, repair, and maintenance of water supply and drainage systems.",
      features: [
        "Pipe Installation",
        "Leak Repairs",
        "Bathroom Fitting",
        "Water Heater Setup",
      ],
    },
    {
      icon: Lightbulb,
      title: "Electrical & Lighting",
      description:
        "Professional electrical work and modern lighting solutions for residential and commercial spaces.",
      features: [
        "Wiring Installation",
        "LED Lighting",
        "Switch & Socket",
        "Electrical Repairs",
      ],
    },
    {
      icon: Sofa,
      title: "Furniture Work",
      description:
        "Custom furniture design and installation including built-in wardrobes, kitchen cabinets, and more.",
      features: [
        "Custom Wardrobes",
        "Kitchen Cabinets",
        "TV Units",
        "Storage Solutions",
      ],
    },
    {
      icon: Grid3X3,
      title: "Tiling Services",
      description:
        "Expert tiling work for floors, walls, and bathrooms with precision and attention to detail.",
      features: [
        "Floor Tiling",
        "Wall Tiling",
        "Bathroom Tiles",
        "Designer Patterns",
      ],
    },
    {
      icon: Mountain,
      title: "Granite Work",
      description:
        "Premium granite installation for countertops, flooring, and decorative elements.",
      features: [
        "Kitchen Counters",
        "Granite Flooring",
        "Staircase Work",
        "Polishing Service",
      ],
    },
    {
      icon: Palette,
      title: "POP & Ceiling",
      description:
        "Decorative POP work and false ceiling installation to enhance your interior aesthetics.",
      features: [
        "False Ceiling",
        "POP Design",
        "Cornices",
        "Decorative Elements",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:px-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Wrench className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Construction Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From plumbing to decorative work, we offer complete construction
            solutions under one roof.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            let iconBackgroundClass = "";
            if (index === 0) {
              iconBackgroundClass =
                "bg-gradient-to-r from-cyan-500 to-blue-600";
            } else if (index === 1) {
              iconBackgroundClass =
                "bg-gradient-to-r from-yellow-500 to-orange-600";
            } else if (index === 2) {
              iconBackgroundClass =
                "bg-gradient-to-r from-green-500 to-emerald-600";
            } else if (index === 3) {
              iconBackgroundClass =
                "bg-gradient-to-r from-orange-500 to-red-600";
            } else if (index === 4) {
              iconBackgroundClass =
                "bg-gradient-to-r from-gray-500 to-slate-600";
            } else {
              iconBackgroundClass =
                "bg-gradient-to-r from-purple-500 to-pink-600";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${iconBackgroundClass} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2  text-slate-700"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-amber-50 group-hover:border-amber-300 transition-colors bg-transparent"
                        onClick={() => smoothScrollTo("#contact")}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <QuoteModal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 text-base"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </QuoteModal>
        </div>
      </div>
    </motion.section>
  );
}
