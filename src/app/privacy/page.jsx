"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Eye,
  Database,
  Share2,
  Lock,
  UserCheck,
  Cookie,
  MessageCircle,
  Clock,
  FileText,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      color: "from-blue-500 to-purple-600",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information you provide when requesting quotes, contacting us, or using our services. This includes your name, email address, phone number, property address, and project details.",
          icon: UserCheck,
        },
        {
          subtitle: "Project Information",
          text: "We collect details about your construction projects, including property specifications, requirements, preferences, and any photos or documents you share with us.",
          icon: FileText,
        },
        {
          subtitle: "Communication Records",
          text: "We maintain records of our communications with you, including emails, phone calls, messages, and meeting notes to provide better service and project continuity.",
          icon: MessageCircle,
        },
        {
          subtitle: "Technical Information",
          text: "Our website may collect technical information such as IP addresses, browser type, device information, and usage patterns to improve our online services.",
          icon: Settings,
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      color: "from-green-500 to-emerald-600",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide construction services, prepare quotes, schedule consultations, manage projects, and communicate about your requirements.",
          icon: CheckCircle,
        },
        {
          subtitle: "Project Management",
          text: "Your information helps us plan, execute, and deliver construction projects efficiently while maintaining quality standards and meeting deadlines.",
          icon: Clock,
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to communicate about projects, provide updates, send quotes, schedule appointments, and respond to your inquiries.",
          icon: MessageCircle,
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze project data and feedback to improve our services, develop better construction solutions, and enhance customer experience.",
          icon: Settings,
        },
      ],
    },
    {
      title: "Information Sharing",
      icon: Share2,
      color: "from-orange-500 to-red-600",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted subcontractors, suppliers, and service providers who assist in delivering construction services under confidentiality agreements.",
          icon: Users,
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court orders, or government regulations, or to protect our rights and safety.",
          icon: Shield,
        },
        {
          subtitle: "Consent-Based Sharing",
          text: "We only share your information with third parties when you have given explicit consent or when necessary for service delivery.",
          icon: CheckCircle,
        },
      ],
    },
    {
      title: "Data Security",
      icon: Lock,
      color: "from-purple-500 to-pink-600",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          icon: Shield,
        },
        {
          subtitle: "Data Storage",
          text: "Your information is stored securely using industry-standard encryption and access controls. We regularly update our security practices to address emerging threats.",
          icon: Database,
        },
        {
          subtitle: "Access Controls",
          text: "Access to your personal information is restricted to authorized personnel who need it for legitimate business purposes and are bound by confidentiality obligations.",
          icon: UserCheck,
        },
        {
          subtitle: "Incident Response",
          text: "We have procedures in place to detect, respond to, and notify you of any security incidents that may affect your personal information.",
          icon: AlertTriangle,
        },
      ],
    },
    {
      title: "Your Rights",
      icon: UserCheck,
      color: "from-cyan-500 to-blue-600",
      content: [
        {
          subtitle: "Access Rights",
          text: "You have the right to request access to your personal information we hold and receive a copy of this information in a commonly used format.",
          icon: Eye,
        },
        {
          subtitle: "Correction Rights",
          text: "You can request correction of inaccurate or incomplete personal information. We will update your information promptly upon verification.",
          icon: Settings,
        },
        {
          subtitle: "Deletion Rights",
          text: "You may request deletion of your personal information, subject to legal and contractual obligations. We will securely delete information when legally permissible.",
          icon: AlertTriangle,
        },
        {
          subtitle: "Objection Rights",
          text: "You can object to certain uses of your personal information and request restrictions on processing for specific purposes.",
          icon: Shield,
        },
      ],
    },
    {
      title: "Cookies and Tracking",
      icon: Cookie,
      color: "from-amber-500 to-orange-600",
      content: [
        {
          subtitle: "Analytics",
          text: "We use web analytics tools to understand how visitors use our website, which helps us improve our online services and user experience.",
          icon: Eye,
        },
        {
          subtitle: "Third-party Services",
          text: "Our website may include third-party services like Google Maps for location services, which have their own privacy policies.",
          icon: MapPin,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4K')]"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/95 backdrop-blur-sm shadow-lg border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <div className="flex items-center gap-4">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-blue-50 text-base"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                </motion.div>
              </Link>
              <div className="w-px h-6 bg-slate-300"></div>
            </div>
            <div className="flex items-center justify-between w-full gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
                className="bg-blue-50 text-blue-700 border-blue-200"
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60"></div>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Policy
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This policy explains how we
              collect, use, and safeguard your data.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Secure & Protected
              </Badge>
            </motion.div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed text-lg mb-4">
                      At Omprakash Kumavat Civil Contractor, we respect your
                      privacy and are committed to protecting your personal
                      information. This Privacy Policy explains how we collect,
                      use, disclose, and safeguard your information when you use
                      our construction services or visit our website.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      By engaging our services or using our website, you consent
                      to the data practices described in this policy. We
                      encourage you to review this policy periodically as we may
                      update it from time to time.
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
            <Card className="mb-12 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 mb-3 text-xl">
                      Data Protection Notice
                    </h3>
                    <p className="text-amber-700 leading-relaxed">
                      We implement industry-standard security measures to
                      protect your personal information. However, no method of
                      transmission over the internet or electronic storage is
                      100% secure. While we strive to protect your data, we
                      cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacy Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm">
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
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
          >
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-800">
                      Contact Us About Privacy
                    </CardTitle>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-8 text-lg">
                  If you have questions about this Privacy Policy or how we
                  handle your personal information:
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
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-slate-100 to-blue-100 border-2 border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-slate-600" />
                  <p className="text-slate-700 font-medium">
                    This Privacy Policy was last updated on{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <p className="text-slate-600 mb-6">
                  We may update this policy periodically to reflect changes in
                  our practices or legal requirements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/terms">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="bg-white hover:bg-slate-50 border-slate-300"
                      >
                        <FileText className="w-4 h-4" />
                        Terms of Service
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        <ArrowLeft className="w-4 h-4" />
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
