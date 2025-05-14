import React from "react";
import ListItem from "./ListItem";

function ListGroup({ feedBacks, removeFeedback, editFeedback }) {
  if (feedBacks.length === 0) {
    return (
      <div className="my-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-600">No Feedbacks Yet...</h1>
        <p className="mt-2 text-gray-500">Start by submitting a review above!</p>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Feedback List</h2>
      <ul className="space-y-4">
        {feedBacks.map((feedBack) => (
          <ListItem
            key={feedBack.id}
            feedBack={feedBack}
            removeFeedback={removeFeedback}
            editFeedback={editFeedback}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;