import Link from 'next/link'
import { Book, Video } from 'lucide-react'

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Learning Resources</h2>
          <p className="text-xl text-gray-300">Access comprehensive study materials and documentation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-neutral-800 rounded-xl p-8 transform hover:-translate-y-2 transition duration-300 animate__animated animate__fadeInLeft">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Book className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white mb-4">GitBook Documentation</h3>
                <p className="text-gray-300 mb-6">Access detailed documentation for each video lecture and course material. Our GitBook resources provide in-depth explanations and additional references.</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Structured course content
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Downloadable materials
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Regular updates
                  </li>
                </ul>
                <Link href="https://nec-license.gitbook.io/computer" target="_blank" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300">
                  Access Documentation
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl p-8 transform hover:-translate-y-2 transition duration-300 animate__animated animate__fadeInRight">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Video className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white mb-4">Video Lectures</h3>
                <p className="text-gray-300 mb-6">Access our comprehensive collection of video lectures covering engineering topics, entrance preparation, and more.</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    HD quality lectures
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Topic-wise organization
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Practice problems
                  </li>
                </ul>
                <Link href="https://www.youtube.com/@innovatorshome" target="_blank" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300">
                  Watch Lectures
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

