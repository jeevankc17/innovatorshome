'use client'
import { useState } from 'react'
import { Mail, MapPin, Youtube, Facebook, Linkedin, } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering License Query',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: 'Engineering License Query',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-neutral-600">Have questions? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeInLeft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option>Engineering License Query</option>
                  <option>Masters Entrance Query</option>
                  <option>Loksewa Exam Query</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate__animated animate__fadeInRight">
            <div className="bg-black rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="mt-1 text-gray-300">Banasthali, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:contact@innovatorshome.com" className="mt-1 text-gray-300 hover:text-green-500">contact@innovatorshome.com</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">YouTube</h4>
                    <a href="https://www.youtube.com/@innovatorshome" target="_blank" rel="noopener noreferrer" className="mt-1 text-gray-300 hover:text-green-500">@innovatorshome</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@innovatorshome" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300">
                  <Youtube className="h-6 w-6 text-white" />
                </a>
                <a href="https://www.youtube.com/@innovatorshome" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a href="https://www.youtube.com/@innovatorshome" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}