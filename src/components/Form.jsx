import React, { useEffect, useState } from "react";

function Form({ addFeedback, edit, updateFeedback }) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) {
      setError("Please select a rating and write a review.");
      return;
    }
    setError("");
    if (!edit.isEdit) {
      addFeedback(rating, review);
    } else {
      updateFeedback({ id: edit.feedBack.id, review, rating });
    }
    setRating("");
    setReview("");
  };

  // Populate form when editing
  useEffect(() => {
    if (edit.isEdit) {
      setReview(edit.feedBack.review || "");
      setRating(edit.feedBack.rating || "");
    }
  }, [edit]);

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {edit.isEdit ? "Edit Review" : "Submit a Review"}
        </h2>

        {/* Rating Select */}
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Select a rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Star" : "Stars"}
              </option>
            ))}
          </select>
        </div>

        {/* Review Textarea */}
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm" role="alert">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          {edit.isEdit ? "Update Review" : "Submit Review"}
        </button>
      </form>
    </div>
  );
}

export default Form;