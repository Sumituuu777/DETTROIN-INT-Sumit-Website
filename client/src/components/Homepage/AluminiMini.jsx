import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const AluminiMini = () => {
    return (
        <div className='flex flex-col items-center gap-20'>

            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Guiding <span className="text-[#0B7A4A]">Alumini</span>
                </h2>

                <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                    We are proud of our alumni who are setting an example and motivating younger students. Here are some alumni who are actively guiding current students by answering questions, conducting webinars and much more.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
            
                  {/* Primary Button */}
            
                  <button
                    className="group flex items-center justify-center gap-2
                    rounded-full bg-[#0B7A4A]
                    px-8 py-4
                    text-white
                    font-semibold
                    shadow-lg shadow-green-200/60
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#09653D]
                    hover:shadow-xl 
                    cursor-pointer"
                  >
                    <Link to="/admissions">Alumini Guidance</Link>
            
                    <HiArrowRight
                      className="transition-transform duration-300
                      group-hover:translate-x-1"
                      size={20}
                    />
                  </button>
            
                  {/* Secondary Button */}
            
                  <button
                    className="group flex items-center justify-center gap-2
                    rounded-full
                    border border-gray-200
                    bg-white/80
                    backdrop-blur-md
                    px-8 py-4
                    font-semibold
                    text-gray-700
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#0B7A4A]
                    hover:text-[#0B7A4A]
                    hover:shadow-lg
                    cursor-pointer"
                  >
                    <Link to="/contact">Success Stories</Link>
            
                    <HiArrowRight
                      className="transition-transform duration-300
                      group-hover:translate-x-1"
                      size={20}
                    />
                  </button>
            
                </div>

        </div>
    )
}

export default AluminiMini
