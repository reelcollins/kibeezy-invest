"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Invest } from "@/components/common"; // Adjust the path as needed
import { Spinner } from "@/components/common"; // Assuming Spinner is in the same path
import { Packages } from "@/components/common"; // Import PaymentPackages component

const graffitiFont: React.CSSProperties = {
  fontFamily: "Permanent Marker, cursive",
};

function Page() {
  const { user, error, isLoading } = useUser();

  const loginBackgroundStyle: React.CSSProperties = {
    backgroundImage: "url('https://kibeezy.s3.eu-north-1.amazonaws.com/Untitled+(4).png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner md />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error.message}
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-black text-white px-6 py-4">
          <h1 style={graffitiFont} className="text-2xl">
            Welcome, {user.name}!
          </h1>
          <button
            onClick={() => (window.location.href = "/api/auth/logout")}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 font-bold rounded"
          >
            Logout
          </button>
        </div>

        {/* Main Content Section */}
        <div className="p-8">
          <Invest />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div
        style={loginBackgroundStyle}
        className="flex-1 flex flex-col items-center justify-center text-white text-center space-y-6 lg:min-h-screen lg:w-1/2"
      >
        <h1 style={graffitiFont} className="text-4xl">
          Kibeezy.com
        </h1>
        <button
          onClick={() => (window.location.href = "/api/auth/login")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 font-bold rounded"
        >
          Login
        </button>
      </div>

      {/* Packages Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:w-1/2">
        <Packages />
      </div>
    </div>
  );
}

export default Page;
