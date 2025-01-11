import { Book, GraduationCap, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: "Engineering License",
    description: "Comprehensive preparation for NEA engineering license examination with detailed video lectures and study materials.",
    icon: ShieldCheck,
    features: ["Video Lectures", "Practice Questions", "Study Materials"]
  },
  {
    title: "Masters Entrance",
    description: "Specialized preparation course for engineering masters entrance examinations with comprehensive coverage.",
    icon: GraduationCap,
    features: ["Subject Wise Content", "Mock Tests", "Previous Year Papers"]
  },
  {
    title: "Loksewa Exam",
    description: "Well-structured preparation course for Loksewa technical examinations with detailed explanations.",
    icon: Book,
    features: ["Technical Topics", "Practice Sets", "Solved Examples"]
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Specialized Courses</h2>
          <p className="text-xl text-neutral-600">Comprehensive preparation materials for your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate__animated animate__fadeInLeft">
              <div className="p-8">
                <div className="h-14 w-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <course.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{course.title}</h3>
                <p className="text-neutral-600 mb-6">{course.description}</p>
                <ul className="text-neutral-600 mb-6 space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="block w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

