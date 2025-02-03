import React from "react";

const StationShort = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Second Station
        </h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-lg lg:w-[500px] sm:w-[360px]"
            height="515"
            src="https://youtube.com/shorts/9hq5P_zlqXk"
            title="YouTube Short"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-gray-700 mt-4">
          Fast, Simple & Reliable
        </p>
      </div>
    </div>
  );
};

export default StationShort;
