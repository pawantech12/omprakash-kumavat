"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Wrench,
  Users,
  CreditCard,
  Shield,
  Scale,
  MessageCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Services Provided",
      icon: Wrench,
      color: "from-blue-500 to-purple-600",
      content: [
        {
          subtitle: "Construction Services",
          text: "We provide civil construction services including but not limited to plumbing, electrical work, furniture installation, tiling, granite work, and POP ceiling work for residential and commercial properties.",
          icon: Wrench,
        },
        {
          subtitle: "Consultation and Quotes",
          text: "We offer free consultations and provide estimates for construction projects. All quotes are valid for 30 days unless otherwise specified.",
          icon: MessageCircle,
        },
        {
          subtitle: "Project Management",
          text: "We manage construction projects from planning to completion, ensuring quality workmanship and timely delivery within agreed timelines.",
          icon: Clock,
        },
      ],
    },
    {
      title: "Client Responsibilities",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      content: [
        {
          subtitle: "Accurate Information",
          text: "Clients must provide accurate and complete information about their project requirements, site conditions, and any relevant constraints or preferences.",
          icon: CheckCircle,
        },
        {
          subtitle: "Site Access",
          text: "Clients must ensure safe and reasonable access to the work site during agreed working hours and provide necessary utilities (water, electricity) as required.",
          icon: MapPin,
        },
        {
          subtitle: "Permits and Approvals",
          text: "Clients are responsible for obtaining necessary permits, approvals, and clearances from local authorities unless specifically agreed otherwise in writing.",
          icon: FileText,
        },
        {
          subtitle: "Payment Terms",
          text: "Clients must adhere to agreed payment schedules. Delayed payments may result in work suspension and additional charges.",
          icon: CreditCard,
        },
      ],
    },
    {
      title: "Our Responsibilities",
      icon: Users,
      color: "from-orange-500 to-red-600",
      content: [
        {
          subtitle: "Quality Workmanship",
          text: "We commit to providing quality construction services using appropriate materials and skilled labor in accordance with industry standards.",
          icon: CheckCircle,
        },
        {
          subtitle: "Timeline Adherence",
          text: "We strive to complete projects within agreed timelines, subject to weather conditions, material availability, and unforeseen circumstances.",
          icon: Clock,
        },
        {
          subtitle: "Safety Compliance",
          text: "We maintain safety standards at work sites and comply with applicable safety regulations and building codes.",
          icon: Shield,
        },
        {
          subtitle: "Professional Conduct",
          text: "Our team maintains professional conduct and respects client property and privacy throughout the project duration.",
          icon: Users,
        },
      ],
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      color: "from-purple-500 to-pink-600",
      content: [
        {
          subtitle: "Payment Schedule",
          text: "Payment terms are typically structured as: 20% advance, 30% at 50% completion, 30% at 90% completion, and 20% upon final completion and handover.",
          icon: CreditCard,
        },
        {
          subtitle: "Accepted Payment Methods",
          text: "We accept payments via bank transfer, cash, cheque, and digital payment methods. All payments should be made to authorized accounts only.",
          icon: CheckCircle,
        },
        {
          subtitle: "Late Payment",
          text: "Late payments may incur additional charges of 2% per month on outstanding amounts. Work may be suspended for payments overdue by more than 15 days.",
          icon: AlertTriangle,
        },
        {
          subtitle: "Material Cost Variations",
          text: "Significant material cost variations (>10%) may require quote adjustments with client approval before proceeding.",
          icon: FileText,
        },
      ],
    },
    {
      title: "Limitation of Liability",
      icon: Scale,
      color: "from-amber-500 to-orange-600",
      content: [
        {
          subtitle: "Liability Cap",
          text: "Our total liability for any project shall not exceed the total contract value. We are not liable for indirect, consequential, or punitive damages.",
          icon: Scale,
        },
        {
          subtitle: "Force Majeure",
          text: "We are not liable for delays or failures due to circumstances beyond our control including natural disasters, government actions, or material shortages.",
          icon: AlertTriangle,
        },
        {
          subtitle: "Third-party Claims",
          text: "Clients indemnify us against claims arising from their failure to obtain necessary permits or comply with legal requirements.",
          icon: Users,
        },
        {
          subtitle: "Insurance Coverage",
          text: "We maintain appropriate insurance coverage for our operations. Clients are advised to maintain their own property insurance.",
          icon: Shield,
        },
      ],
    },
    {
      title: "Termination and Cancellation",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      content: [
        {
          subtitle: "Our Termination Rights",
          text: "We may terminate services for non-payment, unsafe site conditions, or material breach of agreement by the client.",
          icon: AlertTriangle,
        },
        {
          subtitle: "Cancellation Charges",
          text: "Cancellation within 24 hours of scheduled start may incur charges for mobilization costs and material orders that cannot be cancelled.",
          icon: CreditCard,
        },
        {
          subtitle: "Project Handover",
          text: "Upon completion or termination, we will hand over all completed work and provide relevant documentation and warranties.",
          icon: Users,
        },
      ],
    },
    {
      title: "Dispute Resolution",
      icon: MessageCircle,
      color: "from-teal-500 to-cyan-600",
      content: [
        {
          subtitle: "Amicable Resolution",
          text: "We encourage resolving disputes through direct communication and negotiation in good faith before pursuing formal procedures.",
          icon: MessageCircle,
        },
        {
          subtitle: "Mediation",
          text: "If direct resolution fails, disputes may be referred to mediation through a mutually agreed mediator or mediation service.",
          icon: Users,
        },
        {
          subtitle: "Jurisdiction",
          text: "Any legal proceedings shall be subject to the jurisdiction of courts in Mumbai, Maharashtra, India, and governed by Indian law.",
          icon: Scale,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4K')]"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/95 backdrop-blur-sm shadow-lg border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-amber-50 text-base"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </motion.div>
              </Link>
              <div className="w-px h-6 bg-slate-300"></div>
            </div>
            <div className="flex items-center gap-3 justify-between w-full">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">OK</span>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-slate-800 leading-tight">
                    Omprakash Kumavat
                  </h1>
                  <p className="text-xs text-slate-600">Civil Contractor</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-amber-50 text-amber-700 border-amber-200"
              >
                <Calendar className="w-3 h-3 mr-1" />
                Updated {new Date().toLocaleDateString()}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"></div>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Service
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              These terms govern the use of our construction services and
              establish the rights and responsibilities of both parties in our
              professional business relationship.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Professional Standards
              </Badge>
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2">
                <Scale className="w-4 h-4 mr-2" />
                Fair & Transparent
              </Badge>
            </motion.div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="mb-12 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed text-lg mb-4">
                      These Terms of Service ("Terms") constitute a legal
                      agreement between you ("Client") and Omprakash Kumavat
                      ("Contractor," "we," "us," or "our") regarding the
                      provision of civil construction services. By engaging our
                      services, you agree to be bound by these terms.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Please read these terms carefully before engaging our
                      services. If you do not agree with any part of these
                      terms, please do not proceed with our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="mb-12 border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-800 mb-3 text-xl">
                      Important Notice
                    </h3>
                    <p className="text-red-700 leading-relaxed">
                      These terms may be updated periodically to reflect changes
                      in our services or legal requirements. Continued use of
                      our services after changes constitutes acceptance of new
                      terms. Specific project agreements may include additional
                      terms that supplement these general terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-2 hover:border-amber-200 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-slate-800">
                          {section.title}
                        </CardTitle>
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                            {item.subtitle}
                          </h4>
                          <p className="text-slate-700 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-16"
          >
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-800">
                      Agreement and Acceptance
                    </CardTitle>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-blue-700 text-lg">
                  <p>
                    By engaging our services, requesting quotes, or signing
                    project agreements, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service.
                  </p>
                  <p>
                    These terms, along with any specific project agreements,
                    constitute the entire agreement between the parties and
                    supersede all prior negotiations, representations, or
                    agreements relating to the subject matter.
                  </p>
                  <p className="font-semibold">
                    For questions about these terms or to discuss specific
                    project requirements, please contact us using the
                    information below.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-8"
          >
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-800">
                      Contact Information
                    </CardTitle>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-8 text-lg">
                  For questions about these Terms of Service or to discuss your
                  construction project:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "omparkashkumawat.smpr@gmail.com",
                      color: "from-blue-500 to-purple-600",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+919820585835",
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      content:
                        "Flatno.102, Arunoday residency, Jai Malhar, Bapgoan, Maharashtra 421302",
                      color: "from-orange-500 to-red-600",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow "
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-full">
                        <p className="font-semibold text-lg text-slate-800">
                          {contact.title}
                        </p>
                        <p className="text-slate-600 text-base leading-relaxed break-words max-w-full overflow-hidden">
                          {contact.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-slate-100 to-amber-100 border-2 border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-slate-600" />
                  <p className="text-slate-700 font-medium">
                    These Terms of Service are effective as of{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <p className="text-slate-600 mb-6">
                  These terms govern all construction services provided by
                  Omprakash Kumavat and are subject to periodic updates.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/privacy">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="bg-white hover:bg-slate-50 border-slate-300"
                      >
                        <Shield className="w-4 h-4 " />
                        Privacy Policy
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                        <ArrowLeft className="w-4 h-4 " />
                        Back to Home
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
