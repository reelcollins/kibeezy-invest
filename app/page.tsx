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
        <button>
          Welcome {user.name}!
        </button>
        <button onClick={() => (window.location.href = "/api/auth/logout")}>
          Logout
        </button>

        <Invest />
      </div>
    );
  }

  return (
    <div>
      <text>Kibeezy.com</text>
      <text>Nikona Mia tu.</text>

      <button onClick={() => (window.location.href = "/api/auth/login")}>
        Login
      </button>
    </div>
  );
}

export default Page;
