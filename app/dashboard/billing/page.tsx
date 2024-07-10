import React from 'react'

function Billing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Upgrade With Monthly Plan</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-5xl font-bold mb-6">0$<span className="text-xl font-normal text-gray-500">/month</span></p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              20 Requests/Day
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              50+ Content Templates
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Unlimted Download & Copy
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1 Month of History
            </li>
          </ul>
        </div>

        {/* Monthly Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
          <p className="text-5xl font-bold mb-6">9.99$<span className="text-xl font-normal text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Unlimited Requests
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              50+ Template Access
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Unlimted Download & Copy
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1 Year of History
            </li>
          </ul>
          <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billing