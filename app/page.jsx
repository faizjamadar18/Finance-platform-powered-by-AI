import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import {
//   featuresData,
//   howItWorksData,
//   statsData,
//   testimonialsData,
// } from "@/data/landing";
// import HeroSection from "@/components/hero";
// import Link from "next/link";
// import { CheckCircle2, ArrowRight } from "lucide-react";
import Background from "@/components/global/background";
import Hero from "@/components/section/hero-section";
import Difference from "@/components/section/difference";
import Workflow from "@/components/section/workflow-section";
import Capibilities from "@/components/section/capability";
import Cta from "@/components/section/cta";
import Footer from "@/components/section/footer";


const LandingPage = () => {
  return (
    <div className="dark">
      <Background/>
      <Hero/>
      <Difference/>
      <Workflow/>
      <Capibilities/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default LandingPage;