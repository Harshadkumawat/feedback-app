import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import AverageFeedbacks from "./components/AverageFeedbacks";

function App() {
  const [feedBacks, setFeedBacks] = useState([
    
  ]);

  const [edit, setEdit] = useState({
    feedBack: {},
    isEdit: false,
  });

  // Add
  const addFeedback = (rating, review) => {
    setFeedBacks([{ id: crypto.randomUUID(), rating, review }, ...feedBacks]);
  };

  // remove
  const removeFeedback = (id) => {
    setFeedBacks(feedBacks.filter((item) => item.id !== id));
  };

  // Edit
  const editFeedback = (feedBack) => {
    setEdit({ feedBack: feedBack, isEdit: true });
  };

  // update
  const updateFeedback = (updateFeedback) => {
    setFeedBacks(
      feedBacks.map((feedBack) =>
        feedBack.id === updateFeedback.id ? updateFeedback : feedBack
      )
    );
    setEdit({ feedBack: {}, isEdit: false });
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
          addFeedback={addFeedback}
          edit={edit}
          updateFeedback={updateFeedback}
        />
        <AverageFeedbacks feedBacks={feedBacks} />
        <ListGroup
          feedBacks={feedBacks}
          removeFeedback={removeFeedback}
          editFeedback={editFeedback}
        />
      </div>
    </>
  );
}

export default App;
