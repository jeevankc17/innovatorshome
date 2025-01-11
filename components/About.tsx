import React from 'react'
import Link from 'next/link'
import { Globe, Book, Sliders } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-6">About Innovators Home</h2>
            <p className="text-gray-300 mb-8 text-lg">We are dedicated to providing quality education and resources for engineering students and professionals in Nepal. Our mission is to make technical education accessible to everyone.</p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Wide Reach</h3>
                  <p className="mt-2 text-gray-400">Serving students across Nepal with quality educational content</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Comprehensive Resources</h3>
                  <p className="mt-2 text-gray-400">Complete study materials from basics to advanced topics</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Sliders className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Customized Learning</h3>
                  <p className="mt-2 text-gray-400">Tailored content for different examination patterns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
              <p className="text-gray-300 mb-4">Banasthali, Kathmandu, Nepal</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-neutral-700 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">3.68K+</div>
                  <div className="text-sm text-gray-400">YouTube Subscribers</div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">114+</div>
                  <div className="text-sm text-gray-400">Video Lectures</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6">Have questions? We're here to help!</p>
              <Link href="#contact" className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Contact Us
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

