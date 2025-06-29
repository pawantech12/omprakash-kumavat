"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GoogleMaps() {
  const handleGetDirections = () => {
    const address = "74FW+8G6, Thane, Maharashtra 421305";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:px-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Find Us</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Office
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Come visit us at our office for a detailed consultation about your
            construction project.
          </p>
        </div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Map */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-0">
                  <div className="relative w-full h-96 bg-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7532.448992601874!2d73.14331309788889!3d19.27260112367975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7973c34a5d4e5%3A0x5c45c784e0c4b65!2sArunodaya%20Residency!5e0!3m2!1sen!2sin!4v1751203967889!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Omprakash Kumavat Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span>Office Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Omprakash Kumavat
                    </p>
                    <p className="text-slate-600">Civil Contractor</p>
                    <p className="text-slate-600">
                      Flatno.102, Arunoday residency, Jai Malhar, Bapgoan,
                      Maharashtra 421302
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <Link href={"tel:+919820585835"}>+91 9820585835</Link>
                    </div>
                  </div>

                  <Button
                    onClick={handleGetDirections}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-800">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Sunday</span>
                    <span className="font-medium">9:00 AM - 9:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-green-200 transition-colors bg-green-50">
                <CardContent className="p-4 text-center">
                  <p className="text-green-800 font-medium mb-2">
                    Free Consultation Available
                  </p>
                  <p className="text-green-700 text-sm">
                    Visit us for a free consultation and site assessment for
                    your construction project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
