import Link from 'next/link'
import { Book, Download, RefreshCw } from 'lucide-react'

export default function Documentation() {
  return (
    <section id="documentation" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Documentation Hub</h2>
          <p className="text-xl text-gray-300">Comprehensive study materials for every topic</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-800 rounded-xl p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Structured Content</h3>
                  <p className="text-gray-400 mt-2">Well-organized chapters and topics for easy navigation</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Downloadable Resources</h3>
                  <p className="text-gray-400 mt-2">Access materials offline for convenient studying</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Regular Updates</h3>
                  <p className="text-gray-400 mt-2">Fresh content and improvements added regularly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-6">Access Documentation</h3>
            <p className="text-gray-300 mb-8">Our comprehensive documentation provides detailed explanations, examples, and practice problems for every topic covered in our video lectures.</p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Engineering fundamentals</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Practice problems</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Exam preparation guides</span>
              </div>
            </div>
            <div className="mt-8">
              <Link href="https://innovatorshome.tech/docs" target="_blank" className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300">
                Open Documentation
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

