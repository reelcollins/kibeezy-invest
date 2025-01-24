"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spinner } from "@/components/common"; // Adjust import path as necessary



// Add graffiti font from Google Fonts
const graffitiFont = {
  fontFamily: "Permanent Marker, cursive", // Using a permanent marker style font
};

function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner md />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (

          <div>
            <button
            >
              Welcome {user.name}!
            </button>
            <button
              onClick={() => (window.location.href = "/api/auth/logout")}
            >
              Logout
            </button>


          <Spinner />

          </div>

          
      
    );
  }

  return (
    <div>
        <text
        >
          Kibeezy.com
        </text>
        <text
        >
          Nikona Mia tu.
        </text>

        <button
        onClick={() => (window.location.href = "/api/auth/login")}
        >
          Login
        </button>
    </div>
  );
}

export default Page;
