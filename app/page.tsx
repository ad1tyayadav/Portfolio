"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, PhoneIcon as WhatsappLogo } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ViewCounter } from "@/components/view-counter"
import { VideoCard } from "@/components/video-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6">
        <nav className="flex items-center justify-between">
          <Link href='/' className="text-xl font-bold">ADITYA</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#portfolio" className="hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-colors"
            asChild
          >
            <Link href="#contact">Hire Me</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turning Ideas Into <span className="text-red-500">Cinematic</span> Experiences
            </h1>
            <p className="text-xl text-gray-400">
              Professional video editing that captivates audiences and drives engagement
            </p>
            <div className="flex items-center gap-4">
              <div className="text-3xl md:text-4xl font-bold flex items-center">
                <ViewCounter endValue={100000} />
                <span className="ml-2">+</span>
              </div>
              <p className="text-gray-400">Views across platforms</p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="#contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
            <video
              src="/showvideo(1).mp4"
              autoPlay
              muted
              controls
              loop
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured Work</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Long-Form Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard
                title="From BCom to cracking Remote Job as Data Analyst | Non-Tech to Data Analyst Preparation Strategy"
                views="78K+"
                platform="YouTube"
                videoId="HV6SaYNkCLo"
              />
              <VideoCard
                title="How I Got a Tech Job in US (Coding Journey)"
                views="5K+"
                platform="YouTube"
                videoId="LCDszx2gHcg"
              />
              <VideoCard
                title="Freelancing for beginners in 2025 l All you need to know!"
                views="69K+"
                platform="YouTube"
                videoId="hD7MHRWnpfo"
              />
              <VideoCard
                title="How I Cracked Microsoft | Where to Apply for Jobs | Resume shortlisting | 10K Special FAQ ♥️"
                views="6.5K+"
                platform="YouTube"
                videoId="cG7KM78kYt8"
              />
              <VideoCard
                title="What Are Pronouns? | Pronouns in English Grammar With Examples | Parts Of Speech | ChetChat"
                views="18K+"
                platform="YouTube"
                videoId="LPy3vtwYjUw"
              />
              <VideoCard
                title="How to Use LinkedIn & Optimize Your Profile | Beginner-to-Advanced"
                views="17.5K+"
                platform="YouTube"
                videoId="omfq4y6ZNjg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Short-Form Content</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <VideoCard
                title="Instagram Reel - Brand AD"
                views="15K+"
                platform="Instagram"
                videoId="DC6Wi_Sp3Lr"
                isShort={true}
              />
              <VideoCard
                title="Instagram Reel - Internship"
                views="12K+"
                platform="Instagram"
                videoId="DAdCS5ACd7i"
                isShort={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/editor.jpeg"
                alt="Video editor at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About My Work</h2>
              <p className="text-gray-400">
                With over 1 years of professional video editing experience, I specialize in creating compelling visual
                stories that resonate with audiences and drive engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cinematic Editing</h3>
                    <p className="text-gray-400">
                      Professional color grading and visual effects that elevate your content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Engaging Storytelling</h3>
                    <p className="text-gray-400">Narrative-driven editing that keeps viewers watching until the end</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Podcast Editing</h3>
                    <p className="text-gray-400">
                      Edit high quality podcast with podcast recap and detail editing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Platform Optimization</h3>
                    <p className="text-gray-400">
                      Content tailored specifically for YouTube, Instagram, and other platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let's discuss your project and how we can work together to bring your vision to life
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 h-auto"
            onClick={() => window.open("https://wa.me/919129601109", "_blank")}
          >
            <WhatsappLogo className="mr-2 h-6 w-6" />
            Contact Me on WhatsApp
          </Button>
          <p className="mt-6 text-gray-400">
            Or email me at:{" "}
            <a href="mailto:adityaproworks@gmail.com" className="text-white underline">
              adityaproworks@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aditya Editor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
