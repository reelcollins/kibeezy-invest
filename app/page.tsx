"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        {/* You can replace this with a loading spinner */}
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome, {user.name}!</h1>
        <button
          onClick={() => (window.location.href = "/auth/logout")}
          style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://kibeezy.s3.eu-north-1.amazonaws.com/kibeeezy_1734602486_3526423710455050084_9676905752.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "3rem", fontFamily: "'Permanent Marker', cursive" }}>
          Kibeezy.com
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Nikona Mia tu.</p>
        <button
          onClick={() => (window.location.href = "/auth/login")}
          style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Page;
