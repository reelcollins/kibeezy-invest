"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function InvestorDashboard() {
  const { user, isLoading: authLoading } = useUser(); // Get logged-in user details
  const [allUserData, setAllUserData] = useState([]);
  const [investorData, setInvestorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <div className="text-gray-600">Loading data...</div>
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Investor Dashboard
        </h1>

        {/* Overview */}
        <div className="mb-6">
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
            <strong>All Users&apos; Total Payments:</strong> Ksh.
            {allUserData.reduce((sum, user) => sum + parseFloat(user.user_total || 0), 0).toFixed(2)}
            </p>

        </div>

        {/* Payment Details */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Payment Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Amount</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">
                  Transaction ID
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {investorData.payments.map((payment) => (
                <tr key={payment.id} className="text-gray-700">
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.phone_number}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Ksh.{parseFloat(payment.amount)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.transaction_id || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(payment.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
