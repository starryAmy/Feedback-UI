import React from "react";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  const { editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>

      <button
        onClick={() => {
          deleteFeedback(feedback.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button>
        <FaEdit
          onClick={() => {
            editFeedback(feedback);
          }}
          className="edit"
          color="purple"
        />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
