import React from 'react';
import { Play } from 'lucide-react';
import logo from '../src/assets/logo.png'
import bg from '../src/assets/bg.webp'
import desk from '../src/assets/Desk.png'
import './App.css'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="max-w-6xl mx-auto mt-3 px-6 border-[0.5px] border-[#083C2F4C] rounded-3xl py-16 text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // opacity: '100px'
        }}
      >
        {/* Navigation */}
        <nav className="py-2 px-2 flex items-center justify-between">
          <div className="flex items-center">
          <img   src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210bc28e2e48eae50c9772_logo%201.png"
             
             alt="Logo" className="h-8" />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-black border-[0.5px] rounded-lg border-black ">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-[#e2fb6c] text-[#004838]">
              Start for free
            </button>
          </div>
        </nav>
        {/* Hero Section */}

        <div className="mb-4">
          <span className="px-4 py-2 bg-[#083C2F0D] text-[#004838] rounded-full text-sm font-semibold">
            AI Screening Platform
          </span>
        </div>
        <h1 className="text-5xl font-bold text-[#004838] mb-6 text-effect-gradient">
          Your Own Google Form<br />For Hiring.
        </h1>


        <p className="text-xl text-[#083c2f82] max-w-2xl mx-auto mb-8">
          With Lagoon collect, score and filter out candidates without touching their resumes - simplifying screening to seconds.
        </p>
        <div className="mb-8">
          <div className="max-w-lg mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Enter your Google Form URL"
              className="flex-1 px-4 py-3 border rounded-md"
            />
            <button className="px-6 py-3 bg-[#083c2f] text-white rounded-md hover:bg-[#e2fb6c] hover:text-[#083c2f]">
              Get started
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#e2fb6c] text-[#083c2f] rounded-md ">
            Get Started Now
          </button>
          <button className="px-6 py-3 border-[1px] border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 flex items-center gap-2">
            <Play size={16} /> Watch the Demo
          </button>
        </div>
        <div className="mt-16">
          <img src={desk} alt="Dashboard" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              The Magic
            </span>
            <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simplifying your hours of<br />screening to seconds.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature Cards */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Personalized Filters</h3>
              <p className="text-gray-600 mb-6">
                Tools for users to manage their account settings, profile information, and preferences easily.
              </p>
              <img src="/api/placeholder/400/300" alt="Filters" className="w-full rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Prompt-Driven Search</h3>
              <p className="text-gray-600 mb-6">
                A central hub where users can view and interact with key information, data, and functionalities.
              </p>
              <img src="/api/placeholder/400/300" alt="Search" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img src="/api/placeholder/300/200" alt="AI Detection" className="w-full rounded-lg mb-6" />
              <h3 className="text-xl font-bold mb-2">AI Detection</h3>
              <p className="text-gray-600">
                Generation of insightful reports and analytics to provide users with valuable insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img src="/api/placeholder/300/200" alt="Team Collaboration" className="w-full rounded-lg mb-6" />
              <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Responsive design and mobile-friendly interfaces to ensure usability across devices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img src="/api/placeholder/300/200" alt="Status Management" className="w-full rounded-lg mb-6" />
              <h3 className="text-xl font-bold mb-2">Status Management</h3>
              <p className="text-gray-600">
                Infrastructure designed to accommodate growing user demands and scale resources.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-4">
              Get started
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
              Yes, let's get started!
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            How it Works
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shortlist your best candidates in<br />3 simple steps.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Discover how ProductLaunch simplifies project management from start to finish.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Enter Form URL</h4>
              <p className="text-gray-600">Start by sharing your Google Form URL with all the applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Share Job Description</h4>
              <p className="text-gray-600">Add a job description to personalize the scoring algorithm</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Filter and Finalize</h4>
              <p className="text-gray-600">Filter the scored candidates based on your needs and shortlist the best talent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            You're just a click away<br />from your dream hire.
          </h2>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-12">
            Get Started
          </button>
          <div className="flex justify-center items-center gap-8">
            <a href="#" className="text-yellow-300 hover:text-yellow-200">Say Hello</a>
            <img src="/api/placeholder/100/40" alt="Lagoon" className="h-10" />
            <a href="https://www.linkedin.com/company/lagoon-works/" className="text-yellow-300 hover:text-yellow-200">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;