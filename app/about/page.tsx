'use client';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome to Kibeezy Technologies - Pioneering Africa's Digital Revolution</h1>
        <p className="text-lg text-gray-600 text-center">
          We're building an integrated technology ecosystem that transforms how businesses and communities across Africa connect, transact, and thrive in the digital economy.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision: Beyond Connectivity - Building Africa's Digital Infrastructure</h2>
          <p className="text-gray-600">
            Kibeezy Technologies is not just a WiFi company - we're creating a comprehensive technology platform that addresses fundamental challenges in African markets through innovative solutions.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Kibeezy WiFi:</strong> Our foundation - providing affordable, reliable internet connectivity to underserved communities</li>
            <li><strong>Kibeezy Pay:</strong> Integrated payment solutions leveraging M-Pesa for seamless digital transactions</li>
            <li><strong>Kibeezy Cloud:</strong> Localized cloud services tailored for African businesses</li>
            <li><strong>Kibeezy IoT:</strong> Smart technology solutions for agriculture, healthcare, and urban development</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Invest in Kibeezy Technologies?</h2>
          <p className="text-gray-600">
            Africa is experiencing the fastest digital transformation in history. With over 500 million internet users projected by 2025 and mobile money penetration leading globally, the opportunity is unprecedented.
          </p>
          <ul className="list-decimal pl-6 text-gray-600">
            <li>
              <strong>Comprehensive Market Strategy:</strong> We're building multiple revenue streams through interconnected services that create a powerful ecosystem effect
            </li>
            <li>
              <strong>Proven Technology Leadership:</strong> Our team has successfully deployed scalable solutions across East African markets
            </li>
            <li>
              <strong>Strategic Partnerships:</strong> Already working with local governments, educational institutions, and financial service providers
            </li>
            <li>
              <strong>Massive Addressable Market:</strong> Targeting Kenya's $50B+ digital economy with expansion plans across East Africa
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Growth Trajectory</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Phase 1: Foundation (Current)</h3>
              <p className="text-sm text-gray-600">Deploy 500+ WiFi hotspots across key urban and rural locations</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Phase 2: Expansion (2024)</h3>
              <p className="text-sm text-gray-600">Launch payment platform and business services</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Phase 3: Ecosystem (2025)</h3>
              <p className="text-sm text-gray-600">Full platform integration and regional expansion</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Investment Opportunity</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Equity Stake:</strong> Early investors receive ownership in Kibeezy Technologies Ltd</li>
            <li><strong>Revenue Sharing:</strong> Participate in profits from multiple business verticals</li>
            <li><strong>Scalable Returns:</strong> Projected 5-10x ROI within 3-5 years based on market growth</li>
            <li><strong>Advisory Roles:</strong> Opportunity to join our technology advisory board</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why This Moment is Critical</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Digital Transformation Acceleration:</strong> African governments are prioritizing digital infrastructure</li>
            <li><strong>Youth Demographic Dividend:</strong> 70% of Africa's population is under 30, creating massive digital adoption</li>
            <li><strong>Funding Gap:</strong> Limited local tech investment creates first-mover advantage</li>
            <li><strong>Proven Model Validation:</strong> Similar models have shown success in other emerging markets</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700 font-semibold">
            🚀 Early Investor Bonus: First 50 investors receive premium equity terms and founder-level access
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">Join Us in Building Africa's Next Tech Unicorn</h3>
          <p className="text-gray-600">
            This is more than an investment - it's an opportunity to shape the future of technology in Africa. Together, we can build solutions that empower millions while generating substantial returns.
          </p>
          <button 
            className="mt-6 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            onClick={() => (window.location.href = "/api/auth/login")}
          >
            Invest Now - Start from KSh 5,000
          </button>
          <p className="mt-2 text-sm text-gray-500">Secure, M-Pesa integrated • Real-time portfolio tracking • Legal compliance guaranteed</p>
        </div>
      </div>
    </div>
  );
}