import React from "react";

function ListItem({ feedBack, removeFeedback, editFeedback }) {
  return (
    <li transitional className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">
              {"★".repeat(feedBack.rating) + "☆".repeat(5 - feedBack.rating)}
            </span>
            <span className="text-sm text-gray-500">({feedBack.rating} Stars)</span>
          </div>
          <p className="mt-2 text-gray-700">{feedBack.review}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => editFeedback(feedBack)}
            className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            aria-label={`Edit feedback ${feedBack.id}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => removeFeedback(feedBack.id)}
            className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-1"
            aria-label={`Delete feedback ${feedBack.id}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;