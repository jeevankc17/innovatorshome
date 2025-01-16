import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="pt-8 sm:pt-16 min-h-screen sm:min-h-[70vh] bg-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-12 sm:py-20 relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left animate__animated animate__fadeInLeft">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Your Gateway to <span className="text-green-500">Engineering Excellence</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            Comprehensive resources for Engineering License, Masters Entrance, and Loksewa Exam preparation
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#courses" 
              className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-green-600 transition duration-300 text-center"
            >
              Explore Courses
            </Link>
            <Link 
              href="https://innovatorshome.tech/docs" 
              className="bg-neutral-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-neutral-700 transition duration-300 text-center"
            >
              View Documentation
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="flex justify-center">
            <div className="relative w-64 sm:w-80 md:w-96 h-auto">
              <Image
                src="/hero.svg"
                alt="Innovators Home Logo"
                width={500}
                height={500}
                className="w-full h-auto rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}