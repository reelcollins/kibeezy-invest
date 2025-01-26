'use client';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome to Our Seed Funding Platform!</h1>
        <p className="text-lg text-gray-600 text-center">
          We're thrilled to introduce an exciting opportunity to be part of Kenya's next big innovation in internet connectivity: community-driven hotspot solutions.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Are We Raising Funds?</h2>
          <p className="text-gray-600">
            We are building a next-generation hotspot business that leverages the increasing demand for affordable, reliable, and accessible internet across Kenya. With your contributions, we aim to deploy a scalable solution that will revolutionize how communities connect, work, and thrive online.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Launch Strategic Hotspot Locations:</strong> Targeting urban centers, rural hubs, and underserved areas where internet demand is high but options are limited.</li>
            <li><strong>Develop Cutting-Edge Technology:</strong> Implement efficient, scalable, and user-friendly infrastructure that ensures seamless connectivity.</li>
            <li><strong>Empower Local Communities:</strong> Provide affordable internet to schools, small businesses, and individuals, fostering economic growth and education.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Invest in the Hotspot Business?</h2>
          <p className="text-gray-600">
            Kenya is experiencing a digital transformation. With increasing smartphone penetration and a rising number of businesses and individuals moving online, the demand for affordable, high-speed internet is skyrocketing. However, many areas still face connectivity challenges due to high costs and limited infrastructure.
          </p>
          <ul className="list-decimal pl-6 text-gray-600">
            <li>
              <strong>The Future of Connectivity:</strong> Hotspot services offer a cost-effective, scalable, and sustainable solution to bridge this gap. Projections show exponential growth in the internet connectivity sector, with hotspots expected to play a pivotal role.
            </li>
            <li>
              <strong>First-Mover Advantage:</strong> Supporting this project makes you a pioneer in Kenya's emerging hotspot industry, ensuring we capture the market before competitors enter.
            </li>
            <li>
              <strong>Social Impact and Economic Growth:</strong> Providing students with internet access, enabling small businesses to reach online markets, creating job opportunities, and boosting local economies.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Join Us? What’s in It for You?</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Equity Ownership:</strong> Earn a stake in the business with up to 50% of the company offered to early investors. Contact us for more details.</li>
            <li><strong>High ROI Potential:</strong> Kenya's internet market is projected to grow rapidly, promising substantial returns on your investment.</li>
            <li><strong>Be Part of a Legacy:</strong> Join a transformative project that impacts millions while setting a benchmark for connectivity in Africa.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Now?</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Unmet Demand:</strong> A significant portion of the population remains underserved, presenting an untapped market.</li>
            <li><strong>Rising Digital Economy:</strong> With increasing digitization in commerce, education, and healthcare, internet demand will only grow.</li>
            <li><strong>Strategic Timing:</strong> Entering the market early ensures we establish ourselves as industry leaders.</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">Let’s Build the Future Together</h3>
          <p className="text-gray-600">
            This is your chance to be part of something transformative. Together, we can create a reliable, affordable, and accessible internet ecosystem that fuels Kenya's growth and ensures no one is left behind.
          </p>
          <button className="mt-4 rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
                    onClick={() => (window.location.href = "/api/auth/login")}>
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
}
