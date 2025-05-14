import React from "react";

function AverageFeedbacks({ feedBacks }) {
  // Calculate average rating safely
  const averageRating =
    feedBacks.length > 0
      ? feedBacks.reduce((sum, feedback) => sum + Number(feedback.rating), 0) /
        feedBacks.length
      : 0;

  return (
    <div className="max-w-2xl mx-auto my-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium" aria-label="Total reviews">
            Total Reviews:
          </span>
          <span className="text-gray-900 font-semibold">{feedBacks.length}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium" aria-label="Average rating">
            Avg Rating:
          </span>
          <div className="flex items-center">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(averageRating))}
              {"☆".repeat(5 - Math.round(averageRating))}
            </span>
            <span className="ml-2 text-gray-900 font-semibold">
              {averageRating.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AverageFeedbacks;