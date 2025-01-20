"use client"

import Link from "next/link"

const testimonials = [
  {
    quote:
      "The engineering license preparation videos helped me clear my exam in the first attempt. The detailed explanations and practice problems were invaluable.",
    name: "Ram Kumar",
    title: "Engineering License Holder",
  },
  {
    quote:
      "The documentation alongside the video lectures creates a perfect learning environment. The structured content made my masters entrance preparation much easier.",
    name: "Sita Sharma",
    title: "Masters Student",
  },
  {
    quote:
      "The Loksewa exam preparation content is top-notch. The practice questions and detailed solutions helped me understand complex topics easily.",
    name: "Hari Thapa",
    title: "Loksewa Aspirant",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-neutral-600">Hear from our community of learners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <svg className="h-12 w-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
              <blockquote className="text-neutral-600 text-center mb-6">"{testimonial.quote}"</blockquote>
              <div className="text-center">
                <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                <p className="text-sm text-neutral-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Join Our Community
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

