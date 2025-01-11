import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Youtube, Facebook, Linkedin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="animate__animated animate__fadeInUp">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Innovators Home"
                width={40}
                height={40}
                className="rounded-full transition-opacity duration-300"
              />
              <span className="ml-3 text-xl font-bold text-white">Innovators Home</span>
            </div>
            <p className="text-gray-400 mb-6">Empowering engineering students and professionals with quality educational resources.</p>
            <p className="text-gray-400">Banasthali, Kathmandu, Nepal</p>
          </div>

          {/* Quick Links */}
          <div className="animate__animated animate__fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#courses" className="text-gray-400 hover:text-green-500 transition duration-300">Courses</Link></li>
              <li><Link href="#resources" className="text-gray-400 hover:text-green-500 transition duration-300">Resources</Link></li>
              <li><Link href="#youtube" className="text-gray-400 hover:text-green-500 transition duration-300">YouTube Channel</Link></li>
              <li><Link href="#documentation" className="text-gray-400 hover:text-green-500 transition duration-300">Documentation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-green-500 transition duration-300">Engineering License</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-500 transition duration-300">Masters Entrance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-500 transition duration-300">Loksewa Exam</Link></li>
              <li><Link href="https://nec-license.gitbook.io/computer" className="text-gray-400 hover:text-green-500 transition duration-300">Study Materials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate__animated animate__fadeInUp" style={{animationDelay: '0.6s'}}>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-green-500" />
                contact@innovatorshome.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-green-500" />
                Banasthali, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0"> 2024 Innovators Home. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition duration-300">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition duration-300">Terms of Service</Link>
              <Link href="#contact" className="text-gray-400 hover:text-green-500 text-sm transition duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
