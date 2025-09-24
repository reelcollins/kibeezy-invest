'use client';

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl text-gray-700 mx-4">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Invest in Kibeezy Technologies - Building Africa&apos;s Digital Future
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-center font-medium">
          Join us in creating a comprehensive technology ecosystem that transforms connectivity, payments, and digital services across Africa.
        </p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Invest in Kibeezy Technologies?</h2>
          <p className="leading-relaxed">
            We&apos;re building much more than WiFi - we&apos;re creating an integrated platform including <strong>Kibeezy Pay</strong> (M-Pesa powered payments), <strong>Kibeezy Cloud</strong> (localized business solutions), and <strong>Kibeezy IoT</strong> (smart technology for agriculture and healthcare). Our vision is to become East Africa&apos;s leading technology infrastructure provider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800">🎯 Market Opportunity</h3>
            <p className="text-sm">$50B+ digital economy in Kenya alone with massive expansion potential</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">💡 Multiple Revenue Streams</h3>
            <p className="text-sm">WiFi services, payment solutions, cloud platforms, and IoT applications</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Be Part of Africa&apos;s Tech Revolution</h2>
          <p className="leading-relaxed mb-6">
            This is your opportunity to invest in a comprehensive technology platform that addresses fundamental challenges while generating substantial returns. Join our mission to empower millions through innovative digital solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-200"
                  onClick={() => (window.location.href = "/about")}
            >
            Discover Investment Opportunities
          </button>
          <p className="mt-3 text-sm text-gray-600">Starting from KSh 5,000 • M-Pesa Integrated • Equity Stake Available</p>
        </div>
      </div>
    </div>
  );
}