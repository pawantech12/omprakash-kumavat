"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Excellent work by Omprakash Kumavat! The plumbing and tiling work in our new home was completed on time with great attention to detail. Highly recommended for quality construction services.",
      project: "Complete Home Construction",
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Outstanding furniture work and POP ceiling design. The team was professional, punctual, and delivered exactly what we envisioned. The quality exceeded our expectations.",
      project: "Interior Design & Furniture",
    },
    {
      id: 3,
      name: "Amit Desai",
      location: "Nashik, Maharashtra",
      rating: 5,
      text: "Best granite work in the city! The kitchen countertops and flooring look amazing. Professional service from start to finish. Will definitely hire again for future projects.",
      project: "Granite Installation",
    },
    {
      id: 4,
      name: "Sunita Joshi",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Fantastic electrical and lighting work. The LED installation and wiring were done perfectly. Very satisfied with the quality and pricing. Highly professional team.",
      project: "Electrical & Lighting",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Excellent bathroom renovation with premium tiling and plumbing work. The team completed the project within the promised timeline. Great value for money!",
      project: "Bathroom Renovation",
    },
    {
      id: 6,
      name: "Meera Kulkarni",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Amazing POP ceiling work and false ceiling installation. The designs are beautiful and the execution was flawless. Very happy with the results!",
      project: "POP & Ceiling Work",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="md:px-10 px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our work.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-shrink-0 px-1">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="relative overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="absolute top-4 right-4 text-blue-200">
                      <Quote className="w-8 h-8" />
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {testimonial.location}
                        </p>
                        <p className="text-xs text-blue-600 font-medium">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Ratings Summary */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-2 max-[400px]:w-full border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">4.9</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-green-700">Average Rating</div>
                </div>
                <div className="w-px h-12 bg-green-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">500+</div>
                  <div className="text-sm text-green-700">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-green-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">100%</div>
                  <div className="text-sm text-green-700">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
