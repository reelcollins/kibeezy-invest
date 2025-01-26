"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation"; // Importing useRouter for navigation
import { Spinner } from "@/components/common";


export default function Overview() {
  const { user, isLoading: authLoading } = useUser(); // Get logged-in user details
  const [allUserData, setAllUserData] = useState([]);
  const [investorData, setInvestorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return; // Wait until the user is available

      try {
        // Fetch all users' payment data
        const response = await axios.get("https://api.kibeezy.com/api/shares/");
        setAllUserData(response.data.users);

        // Filter data for the logged-in user
        const loggedInUserData = response.data.users.find(
          (u) => u.user_id === user.sub
        );

        setInvestorData(loggedInUserData || { user_id: user.sub, payments: [], user_total: 0, user_percentage_share: 0 });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    if (!authLoading) fetchData(); // Wait until Auth0 loading is complete
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner md />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  const navigateToShares = () => {
    router.push("/shares"); // Navigate to the Shares page (adjust path if necessary)
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Investor Dashboard
        </h1>

        {/* Overview */}
        <div>
          <p className="text-gray-700">
            <strong>User ID:</strong> {investorData.user_id}
          </p>
          <p className="text-gray-700">
            <strong>Total Payments:</strong> Ksh.{investorData.user_total}
          </p>
          <p className="text-gray-700">
            <strong>Percentage Share:</strong> {investorData.user_percentage_share}%
          </p>
          <p className="text-gray-700">
            <strong>Amount to be raised:</strong> Ksh. 1,000,000 for 10%
          </p>
        </div>

        {/* Button to navigate to the Shares page */}
        <div className="mt-6 text-center">
          <button
            onClick={navigateToShares}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition ease-in-out duration-300 transform hover:scale-105"
          >
            View Full Investor Board
          </button>
        </div>
      </div>
    </div>
  );
}
