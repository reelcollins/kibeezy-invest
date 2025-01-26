'use client';

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl text-gray-700">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          Welcome to Our Seed Funding Platform!
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          We&apos;re thrilled to introduce an exciting opportunity to be part of Kenya&apos;s next big innovation in internet connectivity: community-driven hotspot solutions.
        </p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Are We Raising Funds?</h2>
          <p className="leading-relaxed">
            We are building a next-generation hotspot business that leverages the increasing demand for affordable, reliable, and accessible internet across Kenya. With your contributions, we aim to deploy a scalable solution that will revolutionize how communities connect, work, and thrive online.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Let’s Build the Future Together</h2>
          <p className="leading-relaxed mb-6">
            This is your chance to be part of something transformative. Together, we can create a reliable, affordable, and accessible internet ecosystem that fuels Kenya&apos;s growth and ensures no one is left behind.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700"
                  onClick={() => (window.location.href = "/about")}
            >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
