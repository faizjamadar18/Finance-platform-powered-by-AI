import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50/30 to-white">

      <HeroSection />

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-red-50 via-orange-50/30 to-yellow-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sound Familiar?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-red-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">😰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">The End-of-Month Panic</h3>
                    <p className="text-gray-600">
                      You check your account and wonder how you're already broke. Where did it all go? You have no idea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-orange-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Spreadsheet Overload</h3>
                    <p className="text-gray-600">
                      You tried tracking in Excel, but it's a pain to update. You start strong, then forget for weeks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💳</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Multiple Accounts, Zero Clarity</h3>
                    <p className="text-gray-600">
                      You have money in different places, but no idea of your total. Each app shows one piece, never the full picture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-red-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Budget? What Budget?</h3>
                    <p className="text-gray-600">
                      You set goals but never stick to them. You don't know if you're on track until it's too late.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tools That Actually Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No fluff, no complicated features you'll never use. Just the essentials to understand and control your money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuresData.map((feature, index) => (
              <Card 
                key={index} 
                className="group p-6 md:p-8 border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="steps" className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-purple-50/50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Three Steps to Clarity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No complicated setup. No confusing tutorials. Just add your accounts and start tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {howItWorksData.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connection Line */}
                {index < howItWorksData.length - 1 ? (
                  <div className="hidden md:block absolute top-16 left-[50%] w-[calc(100%-80px)] h-0.5 bg-linear-to-r from-blue-300 to-purple-300 z-0"></div>
                ) : null}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real People, Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what people like you are saying about actually knowing where their money goes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 md:p-8 border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-blue-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50/50 to-blue-50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Stop Wondering. Start Knowing.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You don't need another complicated finance app. You need something simple that works. 
              See where your money actually goes, set budgets that make sense, and finally feel in control.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
                >
                  Start Tracking Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;