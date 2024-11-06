import React from 'react';
import { useState } from 'react';
import bg from '../src/assets/bg.webp';
import './App.css'
import icon from '../src/assets/Header.png'

export default  LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <div
        className="relative "
        style={{
          // backgroundImage: "url('https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d61c_Container-BG-2.webp')",
          backgroundPosition: 'center',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1px solid rgba(8, 60, 47, 0.3)',
          borderRadius: '1.11rem',
          margin: '1rem 1.39rem 1.39rem',
          overflow: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative"> {/* Container to keep content above overlay */}
          {/* Navigation */}
          <nav className="relative">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-4">
                <a href="#" className="flex">
                  <img
                    src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210bc28e2e48eae50c9772_logo%201.png"
                    alt="Logo"
                    className="h-8"
                  />
                </a>
                <div className="hidden md:flex items-center space-x-4">
                  <a href="https://webflow.com/website/relume-library-styleguide" target="_blank"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md">
                    Sign in
                  </a>
                  <a href="https://relume.io" target="_blank"
                    className="px-4 py-2 text-sm font-medium bg-[#e2fb6c] text-[#004838] rounded-md ">
                    Start for free
                  </a>
                </div>
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="md:hidden p-2"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="pt-16 pb-32">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 mb-4">
                    <span className="text-sm font-semibold text-gray-600">AI Screening Platform</span>
                  </div>
                  <h1 className="text-4xl font-bold text-effect-gradient sm:text-5xl  mb-6 ">
                    Your Own Google Form<br />For Hiring.
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    With Lagoon collect, score and filter out candidates without touching their resumes - simplifying screening to seconds.
                  </p>

                  {/* Form */}
                  <div className="max-w-xl mx-auto mb-8">
                    <form className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your Google Form URL"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <button className="px-6 py-3 bg-[#083c2f] text-white rounded-md hover:bg-[#e2fb6c] hover:text-[#083c2f]">
                        Get started
                      </button>
                    </form>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a href="#" className="px-6 py-3  rounded-md bg-[#e2fb6c] text-[#083c2f]">
                      Get Started Now
                    </a>
                    <a href="#" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-2">
                      <img
                        src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d60f_player-play.webp"
                        alt="play"
                        className="w-4 h-4"
                      />
                      Watch the Demo
                    </a>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="mt-12">
                  <img
                    src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210cce63f6018640cb32ef_Desktop%20-%202%20(1).png"
                    alt="Hero"
                    className="w-full max-w-5xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 mb-4">
              <span className="text-sm font-semibold text-gray-600">The Magic</span>
            </div>
            {/* <h2 className="text-4xl text-[#083c2f] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simplifying your hours of<br />screening to seconds.
            </h2> */}
            <h2 class="text-4xl font-bold text-effect-gradient"> Simplifying your hours of
              <br />screening to seconds. </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Personalized Filters</h3>
                <p className="text-gray-600">
                  Tools for users to manage their account settings, profile information, and preferences easily.
                </p>
              </div>
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2.png"
                alt="Personalized Filters"
                className="w-full rounded-lg"
              />
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Prompt-Driven Search</h3>
                <p className="text-gray-600">
                  A central hub where users can view and interact with key information, data, and functionalities relevant to their account.
                </p>
              </div>
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202.png"
                alt="Prompt-Driven Search"
                className="w-full rounded-lg h-96"
              />
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2.png"
                alt="AI Detection"
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4">AI Detection</h3>
              <p className="text-gray-600">
                Generation of insightful reports and analytics to provide users with valuable insights into their usage patterns.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3.png"
                alt="Team Collaboration"
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-gray-600">
                Responsive design and mobile-friendly interfaces to ensure usability across various devices and screen sizes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2.png"
                alt="Status Management"
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-4">Status Management</h3>
              <p className="text-gray-600">
                Infrastructure and architecture designed to accommodate growing user demands and scale resources accordingly.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex justify-center gap-4">
              <a href="#" className="px-6 py-3 bg-[#e2fb6c] text-[#083c2f] rounded-md ">
                Get started
              </a>
              <a href="#" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                Yes, let's get started!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 mb-4">
              <span className="text-sm font-semibold text-gray-600">How it Works</span>
            </div>
            <h2 className="text-4xl font-bold text-effect-gradient  mb-6">
              Shortlist your best candidates in<br />3 simple steps.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how ProductLaunch simplifies project management from start to finish. Learn about setting up projects, tracking progress, and achieving successful outcomes with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center border-gray-400 border-[0.5px] rounded-3xl p-8">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d614_no..png"
                alt="Step 1"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-600 mb-4">Enter Form URL</h4>
              <p className="text-gray-600">Start by sharing your Google Form URL with all the applications</p>
            </div>

            {/* Step 2 */}
            <div className="text-center border-gray-400 border-[0.5px] rounded-3xl p-8">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d613_no.-1.png"
                alt="Step 2"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-600 mb-4 ">Share Job Description</h4>
              <p className="text-gray-600">Add a job description to personalize the scoring algorithm</p>
            </div>

            {/* Step 3 */}
            <div className="text-center border-gray-400 border-[0.5px] rounded-3xl p-8">
              <img
                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d615_no.-2.png"
                alt="Step 3"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-600 mb-4">Filter and Finalize</h4>
              <p className="text-gray-600">Filter the scored candidates based on your needs and shortlist the best talent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#083c2f] text-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#E2FB6C]">
              You're just a click away<br />from your dream hire.
            </h2>
            <a href="#" className="inline-block px-8 py-3 bg-[#e2fb6c] text-[#083c2f] rounded-md">
              Get Started
            </a>

            <nav className="flex justify-center items-center mt-12 space-x-8">
              <a href="#" className="text-[#E2FB6C] text-lg hover:text-[#E2FB6C]/80 flex items-center">
                Say Hello
              </a>
              <img src={icon} alt="Lagoon" className="h-16 align-middle" />
              <a href="https://www.linkedin.com/company/lagoon-works/" 
              className="text-[#E2FB6C] hover:text-[#E2FB6C]/80 flex text-lg items-center">
                LinkedIn
              </a>
            </nav>

          </div>
        </div>
      </section>
    </div>
  );
};

// export default LandingPage;