"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import ImageLightbox from "@/components/image-lightbox";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function Projects() {
  const projectDetails = [
    { img: "/project1.webp", category: "Furniture" },
    { img: "/project2.webp", category: "Furniture" },
    { img: "/project3.webp", category: "Furniture" },
    { img: "/project4.webp", category: "Furniture" },
    { img: "/project5.webp", category: "Furniture" },
    { img: "/project6.webp", category: "Furniture" },
    { img: "/project7.webp", category: "Furniture" },
    { img: "/project8.webp", category: "Furniture" },
    { img: "/project9.webp", category: "Furniture" },
    { img: "/project10.webp", category: "Furniture" },
    { img: "/project11.webp", category: "POP" },
    { img: "/project12.webp", category: "POP" },
    { img: "/project13.webp", category: "POP" },
    { img: "/project14.webp", category: "POP" },
    { img: "/project15.webp", category: "POP" },
    { img: "/project16.webp", category: "POP" },
    { img: "/project17.webp", category: "POP" },
    { img: "/project18.webp", category: "POP" },
    { img: "/project19.webp", category: "POP" },
    { img: "/project20.webp", category: "Tiling" },
    { img: "/project21.webp", category: "Tiling" },
    { img: "/project22.webp", category: "Tiling" },
    { img: "/project23.webp", category: "Tiling" },
    { img: "/project24.webp", category: "Tiling" },
    { img: "/project25.webp", category: "Tiling" },
    { img: "/project26.webp", category: "Tiling" },
    { img: "/project27.webp", category: "Tiling" },
    { img: "/project28.webp", category: "Lighting" },
    { img: "/project29.webp", category: "Lighting" },
    { img: "/project30.webp", category: "Lighting" },
    { img: "/project31.webp", category: "Lighting" },
    { img: "/project32.webp", category: "Plumbing" },
    { img: "/project33.webp", category: "Plumbing" },
    { img: "/project34.webp", category: "Granite" },
    { img: "/project35.webp", category: "Granite" },
    { img: "/project36.webp", category: "Granite" },
    { img: "/project37.webp", category: "Granite" },
    { img: "/project38.webp", category: "Granite" },
  ];

  const projects = {
    all: projectDetails.map((project, index) => ({
      id: index + 1,
      title: "", // Optional: Add logic to dynamically generate a title
      location: "",
      date: "",
      image: project.img,
      category: project.category,
      description: "",
    })),
  };

  // Group by category
  for (const item of projects.all) {
    const key = item.category.toLowerCase();
    if (!projects[key]) {
      projects[key] = [];
    }
    projects[key].push(item);
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [visibleCounts, setVisibleCounts] = useState({
    all: 6,
    furniture: 6,
    pop: 6,
    tiling: 6,
    lighting: 6,
    plumbing: 6,
    granite: 6,
  });
  const [loadingMore, setLoadingMore] = useState(false);

  const handleImageClick = (project) => {
    const category = project.category.toLowerCase(); // e.g., "ui", "web"
    const categoryImages = projects[category].map((p, idx) => ({
      src: p.image,
      alt: `Project ${idx + 1}`,
      title: `${category} Project ${idx + 1}`,
    }));

    const index = projects[category].findIndex(
      (p) => p.image === project.image
    );

    setCurrentImages(categoryImages); // only same category images
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleLoadMore = (category) => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCounts((prev) => ({
        ...prev,
        [category]: Math.min(prev[category] + 3, projects[category].length),
      }));
      setLoadingMore(false);
    }, 500); // Simulate loading delay
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:px-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Our Projects</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across residential,
            commercial, and renovation categories.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap sm:grid w-full sm:grid-cols-7 mb-12 bg-slate-100 p-1 rounded-lg overflow-x-auto h-full">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="furniture"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              Furniture
            </TabsTrigger>
            <TabsTrigger
              value="pop"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              POP
            </TabsTrigger>
            <TabsTrigger
              value="tiling"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              Tiling
            </TabsTrigger>
            <TabsTrigger
              value="lighting"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              Lighting
            </TabsTrigger>
            <TabsTrigger
              value="plumbing"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              Plumbing
            </TabsTrigger>
            <TabsTrigger
              value="granite"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-slate-600 data-[state=active]:text-white whitespace-nowrap py-2 flex-1 text-center"
            >
              Granite
            </TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, projectList], index) => (
            <TabsContent key={index} value={category}>
              <AnimatePresence>
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {projectList
                    .slice(0, visibleCounts[category])
                    .map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
                          <div className="relative overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4">
                                <Button
                                  className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                                  onClick={() => handleImageClick(project)}
                                >
                                  <Eye className="w-4 h-4" />
                                  View Image
                                </Button>
                              </div>
                            </div>
                            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                              {project.category}
                            </Badge>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>

                {visibleCounts[category] < projects[category].length && (
                  <motion.div
                    className="text-center mt-12"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-amber-300 hover:bg-amber-50 bg-transparent"
                      onClick={() => handleLoadMore(category)}
                      disabled={loadingMore}
                    >
                      {loadingMore ? "Loading..." : "Load More"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <ImageLightbox
        images={currentImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </motion.section>
  );
}
