import React from 'react'
import { Button } from './button'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r text-black py-20">
      <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-3">
          <span className="text-[#6A38C2]">Find Your</span> Dream Jobs
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Connect with top employers and discover opportunities that match your skills
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-black text-indigo-600 hover:bg-gray-100">
            Browse Jobs
          </Button>
          <Button className="bg-black text-indigo-600 hover:bg-gray-100">
            Post a Job
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection