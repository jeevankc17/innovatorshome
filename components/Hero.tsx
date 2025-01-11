import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="pt-16 min-h-[70vh] bg-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-full py-20 relative z-10">
        <div className="text-center md:text-left md:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to <span className="text-green-500">Engineering Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive resources for Engineering License, Masters Entrance, and Loksewa Exam preparation
          </p>
          <div className="space-x-4">
            <Link href="#courses" className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition duration-300">
              Explore Courses
            </Link>
            <Link href="https://nec-license.gitbook.io/computer" className="bg-neutral-800 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-700 transition duration-300">
              View Documentation
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
    <div className="relative w-64 h-64">
        <Image
            src="/hero.svg"
            alt="Innovators Home Logo"
            width={500}
            height={500}
            className="w-full h-full rounded-full object-cover"
        />
    </div>
</div>
      </div>
    </section>
  )
}

