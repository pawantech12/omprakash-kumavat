"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/contact", data);

      if (response.data.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Create WhatsApp message
        const message = `New Contact Form Submission:
    
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Required: ${data.service}
Message: ${data.message}

Please get back to me soon. Thank you!`;

        const whatsappUrl = `https://wa.me/9820585835?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
        reset();
      }
    } catch (error) {
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-amber-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:px-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a
            free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          {[
            {
              icon: Phone,
              title: "Call Us",
              content: ["Ready to help you", "+91 9820585835"],
              color: "green",
            },
            {
              icon: Mail,
              title: "Email Us",
              content: ["Send us a message", "omparkashkumawat.smpr@gmail.com"],
              color: "blue",
            },
            {
              icon: Clock,
              title: "Working Hours",
              content: ["We're available", "Mon - Sun: 9:00 AM - 9:00 PM"],
              color: "purple",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card
                className={`border-2 hover:border-${item.color}-200 transition-colors `}
              >
                <CardHeader className="text-center pt-6 pb-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-2`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center ">
                  {item.content.map((line, i) => (
                    <p
                      key={i}
                      className={`font-semibold text-slate-800 ${
                        i === 0 ? "text-slate-600" : ""
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Contact Form */}
        <motion.div
          className="md:w-9/12 mx-auto mt-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 hover:border-purple-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Send Us a Message
              </CardTitle>
              <p className="text-slate-600 text-center">
                Fill out the form below and we'll get back to you soon.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="flex items-center space-x-2 text-base"
                    >
                      <User className="w-4 h-4" />
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      {...register("name", { required: true })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="flex items-center space-x-2 text-base"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="flex items-center space-x-2 text-base"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      {...register("phone", { required: true })}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="flex items-center space-x-2 text-base"
                    >
                      <Building className="w-4 h-4" />
                      <span>Service Required</span>
                    </Label>
                    <Input
                      id="service"
                      name="service"
                      {...register("service")}
                      placeholder="e.g., Plumbing, Tiling, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="flex items-center space-x-2 text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Message</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    {...register("message", { required: true })}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-base"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className=" w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
