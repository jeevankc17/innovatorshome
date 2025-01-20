import Image from 'next/image'
import Link from 'next/link'

const featuredVideos = [
  {
    title: "Digital Signal Processing",
    description: "Comprehensive lecture on digital signal processing fundamentals",
    imageUrl: "https://i.ytimg.com/vi/4mp165Zvbxw/hqdefault.jpg"
  },
  {
    title: "Engineering Mathematics",
    description: "In-depth coverage of engineering mathematics concepts",
    imageUrl: "https://i.ytimg.com/vi/1xPjaQS1cLU/oar2.jpg"
  },
  {
    title: "License Exam Preparation",
    description: "Essential topics for engineering license examination",
    imageUrl: "https://i.ytimg.com/vi/4mp165Zvbxw/hqdefault.jpg"
  }
]

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Latest YouTube Content</h2>
          <p className="text-xl text-neutral-600 mb-8">Join our growing community of 3.68K+ subscribers</p>
          <Link href="https://www.youtube.com/@innovatorshome" target="_blank" className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition duration-300">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
            </svg>
            Subscribe to Channel
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInLeft">
              <Image
                src={video.imageUrl}
                alt={video.title}
                width={480}
                height={360}
                className="w-full h-48 object-cover transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{video.title}</h3>
                <p className="text-neutral-600 mb-4">{video.description}</p>
                <Link href="https://www.youtube.com/@innovatorshome" className="text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                  Watch Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeInUp">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-4 rounded-full shadow-md">
              <span className="text-2xl font-bold text-neutral-900">114+</span>
              <span className="block text-sm text-neutral-600">Videos</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-full shadow-md">
              <span className="text-2xl font-bold text-neutral-900">3.68K+</span>
              <span className="block text-sm text-neutral-600">Subscribers</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-full shadow-md">
              <span className="text-2xl font-bold text-neutral-900">Free</span>
              <span className="block text-sm text-neutral-600">Access</span>
            </div>
          </div>
          <Link href="https://www.youtube.com/@innovatorshome/videos" className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-black transition duration-300">
            View All Videos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

