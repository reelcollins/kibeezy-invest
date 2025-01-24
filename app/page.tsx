"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Invest } from "@/components/common"; // Adjust the path as needed
import { Spinner } from "@/components/common"; // Assuming Spinner is in the same path

const graffitiFont = {
  fontFamily: "Permanent Marker, cursive",
};

function Page() {
  const { user, error, isLoading } = useUser();

  const loginBackgroundStyle = {
    backgroundImage: "url('https://kibeezy.s3.eu-north-1.amazonaws.com/Untitled-2+(4).png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };

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
        <div>
          <h1 style={graffitiFont}>Welcome {user.name}!</h1>
          <button
            onClick={() => (window.location.href = "/api/auth/logout")}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded mt-4"
          >
            Logout
          </button>
          <div className="mt-8">
            <Invest />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={loginBackgroundStyle}>
      <div>
        <h1 style={graffitiFont}>Kibeezy.com</h1>
        <button
          onClick={() => (window.location.href = "/api/auth/login")}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Page;
