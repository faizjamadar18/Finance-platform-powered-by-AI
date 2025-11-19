"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                            AI-Powered Finance Management
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                            Where Did Your
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mt-2">
                            Money Go?
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
                        Tired of checking your bank account and wondering where everything went? 
                        Finance helps you track every dollar, understand your spending habits, and build better money habits—without the spreadsheet headaches.
                    </p>
                    <p className="text-base text-gray-600 mb-10 max-w-2xl mx-auto">
                        Finally, a finance app that actually makes sense
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                        <Link href="/dashboard">
                            <Button 
                                size="lg" 
                                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                See Where Your Money Goes
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300"
                            >
                                Already Have an Account?
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
