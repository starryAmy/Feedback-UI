import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, rating: 5, text: "this is coming from context" },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm("Delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };
  const addNewFeedback = (newFeedback) => {
    //add id to new feedback
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const [FeedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //set item to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  //update feedback and submit
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updItem } : feedback
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addNewFeedback,
        editFeedback,
        FeedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
