"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Send, User, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Toaster } from "sonner";
import axios from "axios";

export default function QuoteModal({ children }) {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      propertyType: "",
      area: "",
      timeline: "",
      budget: "",
      services: [],
      description: "",
      urgency: "",
      preferredContact: "",
      visitRequired: false,
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const selectedServices = watch("services");
  const urgency = watch("urgency");
  const area = Number.parseInt(watch("area") || "0");
  const projectType = watch("projectType");

  // Services list
  const services = [
    {
      id: "plumbing",
      name: "Plumbing Services",
      baseRate: 150,
      unit: "per point",
    },
    {
      id: "electrical",
      name: "Electrical & Lighting",
      baseRate: 200,
      unit: "per point",
    },
    {
      id: "furniture",
      name: "Furniture Work",
      baseRate: 500,
      unit: "per sq ft",
    },
    { id: "tiling", name: "Tiling Services", baseRate: 80, unit: "per sq ft" },
    { id: "granite", name: "Granite Work", baseRate: 120, unit: "per sq ft" },
    { id: "pop", name: "POP & Ceiling", baseRate: 90, unit: "per sq ft" },
  ];

  // Estimate Calculation (auto-updates)
  useEffect(() => {
    if (!selectedServices) return;
    let total = 0;

    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (!service) return;

      if (serviceId === "plumbing" || serviceId === "electrical") {
        total += service.baseRate * Math.ceil(area / 100) * 5; // 5 points per 100 sq ft
      } else {
        total += service.baseRate * area;
      }
    });

    if (projectType === "commercial") total *= 1.3;
    if (urgency === "urgent") total *= 1.2;

    setEstimatedCost(total);
  }, [selectedServices, area, urgency, projectType]);

  // Handle Submit
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/quote", data);

      if (response.data.success) {
        toast.success("Quote request submitted successfully!");

        const message = `Hi! I'd like to request a quote for my construction project.

Name: ${data.name}
Phone: ${data.phone}
Project Type: ${data.projectType}
Property Type: ${data.propertyType}
Area: ${data.area} sq ft
Services: ${data.services
          .map((s) => services.find((srv) => srv.id === s)?.name)
          .join(", ")}
Timeline: ${data.timeline}
Budget Range: ${data.budget}
Estimated Cost: ₹${estimatedCost.toLocaleString()}

Description: ${data.description}

Preferred Contact Method: ${data.preferredContact}
Site Visit Required: ${data.visitRequired ? "Yes" : "No"}

Please provide a detailed quote. Thank you!`;

        const whatsappUrl = `https://wa.me/9820585835?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");

        setIsOpen(false);
        setStep(1);
        reset(); // reset RHF form
      }
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2 text-2xl">
                <Calculator className="w-6 h-6 text-blue-600" />
                <span>Get Free Quote</span>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-3">
              {/* Progress Indicator with animation */}
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {[1, 2, 3].map((stepNum) => (
                  <motion.div
                    key={stepNum}
                    className="flex items-center"
                    animate={{ scale: step >= stepNum ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= stepNum
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stepNum}
                    </motion.div>
                    {stepNum < 3 && (
                      <div
                        className={`w-12 h-1 ${
                          step > stepNum ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated step content */}
              <AnimatePresence>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <User className="w-5 h-5" />
                          <span>Personal Information</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-base">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              {...register("name", {
                                required: "Full name is required",
                              })}
                              placeholder="Enter your full name"
                            />
                            {errors.name && (
                              <p className="text-sm text-red-500">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-base">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10,15}$/,
                                  message: "Invalid phone number",
                                },
                              })}
                              placeholder="+91 98765 43210"
                            />
                            {errors.phone && (
                              <p className="text-sm text-red-500">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-base">
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              {...register("email", {
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Invalid email address",
                                },
                              })}
                              placeholder="your.email@example.com"
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address" className="text-base">
                              Project Address *
                            </Label>
                            <Input
                              id="address"
                              {...register("address", {
                                required: "Project address is required",
                              })}
                              placeholder="Enter project location"
                            />
                            {errors.address && (
                              <p className="text-sm text-red-500">
                                {errors.address.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Project Details */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                          <Wrench className="w-5 h-5" />
                          <span>Project Details</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-base">Project Type *</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("projectType", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="residential">
                                  Residential
                                </SelectItem>
                                <SelectItem value="commercial">
                                  Commercial
                                </SelectItem>
                                <SelectItem value="renovation">
                                  Renovation
                                </SelectItem>
                                <SelectItem value="repair">
                                  Repair & Maintenance
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.projectType && (
                              <p className="text-red-500 text-sm">
                                {errors.projectType.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label className="text-base">Property Type</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("propertyType", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="apartment">
                                  Apartment
                                </SelectItem>
                                <SelectItem value="villa">
                                  Villa/House
                                </SelectItem>
                                <SelectItem value="office">Office</SelectItem>
                                <SelectItem value="shop">
                                  Shop/Retail
                                </SelectItem>
                                <SelectItem value="warehouse">
                                  Warehouse
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="area" className="text-base">
                              Area (sq ft) *
                            </Label>
                            <Input
                              id="area"
                              type="number"
                              {...register("area", {
                                required: "Area is required",
                              })}
                              placeholder="Enter area in square feet"
                            />
                            {errors.area && (
                              <p className="text-red-500 text-sm">
                                {errors.area.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label className="text-base">Timeline</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("timeline", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-2weeks">
                                  1-2 Weeks
                                </SelectItem>
                                <SelectItem value="1month">1 Month</SelectItem>
                                <SelectItem value="2-3months">
                                  2-3 Months
                                </SelectItem>
                                <SelectItem value="6months">
                                  6+ Months
                                </SelectItem>
                                <SelectItem value="flexible">
                                  Flexible
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-base">Budget Range</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("budget", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-50k">
                                  Under ₹50,000
                                </SelectItem>
                                <SelectItem value="50k-1l">
                                  ₹50,000 - ₹1,00,000
                                </SelectItem>
                                <SelectItem value="1l-3l">
                                  ₹1,00,000 - ₹3,00,000
                                </SelectItem>
                                <SelectItem value="3l-5l">
                                  ₹3,00,000 - ₹5,00,000
                                </SelectItem>
                                <SelectItem value="5l-10l">
                                  ₹5,00,000 - ₹10,00,000
                                </SelectItem>
                                <SelectItem value="above-10l">
                                  Above ₹10,00,000
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-base">Urgency</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("urgency", value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="normal">Normal</SelectItem>
                                <SelectItem value="urgent">
                                  Urgent (+20% cost)
                                </SelectItem>
                                <SelectItem value="emergency">
                                  Emergency
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Services Selection */}
                        <div className="space-y-4">
                          <Label className="text-base font-medium">
                            Required Services *
                          </Label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {services.map((service) => (
                              <div
                                key={service.id}
                                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50"
                              >
                                <Checkbox
                                  id={service.id}
                                  checked={selectedServices?.includes(
                                    service.id
                                  )}
                                  onCheckedChange={(checked) => {
                                    const current = selectedServices || [];
                                    if (checked) {
                                      setValue("services", [
                                        ...current,
                                        service.id,
                                      ]);
                                    } else {
                                      setValue(
                                        "services",
                                        current.filter(
                                          (id) => id !== service.id
                                        )
                                      );
                                    }
                                  }}
                                />
                                <div className="flex-1">
                                  <Label
                                    htmlFor={service.id}
                                    className="font-medium cursor-pointer"
                                  >
                                    {service.name}
                                  </Label>
                                  <p className="text-sm text-gray-600">
                                    ₹{service.baseRate} {service.unit}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Additional Details & Quote */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">
                          Additional Details & Quote
                        </h3>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-base">
                              Project Description
                            </Label>
                            <Textarea
                              id="description"
                              {...register("description")}
                              placeholder="Describe your project requirements, specific needs, or any special instructions..."
                              rows={4}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-base">
                                Preferred Contact Method
                              </Label>
                              <Select
                                onValueChange={(value) =>
                                  setValue("preferredContact", value)
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="How should we contact you?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="phone">
                                    Phone Call
                                  </SelectItem>
                                  <SelectItem value="whatsapp">
                                    WhatsApp
                                  </SelectItem>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="visit">
                                    Site Visit
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex items-center space-x-2 pt-6">
                              <Checkbox
                                id="visitRequired"
                                checked={watch("visitRequired")}
                                onCheckedChange={(checked) =>
                                  setValue("visitRequired", checked)
                                }
                              />
                              <Label htmlFor="visitRequired">
                                Site visit required for accurate quote
                              </Label>
                            </div>
                          </div>
                        </div>

                        {/* Quote Summary */}
                        <Card className="border-2 border-blue-200 bg-blue-50">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-blue-800">
                              <Calculator className="w-5 h-5" />
                              <span>Estimated Quote</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span>Selected Services:</span>
                                <div className="flex flex-wrap gap-1">
                                  {watch("services")?.map((serviceId) => {
                                    const service = services.find(
                                      (s) => s.id === serviceId
                                    );
                                    return (
                                      <Badge
                                        key={serviceId}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {service?.name}
                                      </Badge>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="flex justify-between items-center">
                                <span>Project Area:</span>
                                <span>{watch("area")} sq ft</span>
                              </div>

                              <div className="flex justify-between items-center">
                                <span>Project Type:</span>
                                <span className="capitalize">
                                  {watch("projectType")}
                                </span>
                              </div>

                              {watch("urgency") === "urgent" && (
                                <div className="flex justify-between items-center text-orange-600">
                                  <span>Urgency Surcharge:</span>
                                  <span>+20%</span>
                                </div>
                              )}
                            </div>

                            <div className="border-t pt-4">
                              <div className="flex justify-between items-center text-lg font-bold text-blue-800">
                                <span>Estimated Total:</span>
                                <span>₹{estimatedCost.toLocaleString()}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">
                                * This is a rough estimate. Final quote may vary
                                based on site inspection and specific
                                requirements.
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                    {/* Animated navigation buttons */}
                    <motion.div
                      className="flex justify-between pt-6 border-t"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {/* Previous Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => setStep(step - 1)}
                          disabled={step === 1}
                        >
                          Previous
                        </Button>
                      </motion.div>

                      {/* Conditional: Next or Submit */}
                      {step < 3 ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            disabled={
                              (step === 1 &&
                                (!watch("name") ||
                                  !watch("phone") ||
                                  !watch("address"))) ||
                              (step === 2 &&
                                (!watch("projectType") ||
                                  !watch("area") ||
                                  watch("services")?.length === 0))
                            }
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Next
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                Send Quote Request
                              </>
                            )}
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  );
}
