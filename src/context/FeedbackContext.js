import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  //first time loading, fetch feedback from local storage
  //the latter argument is an empty array, so it only runs once
  useEffect(() => {
    fetchData();
  }, []);

  //fetch feedback from local storage
  const fetchData = async () => {
    //i have set up proxy in package.json
    const res = await fetch("/feedback");
    //.json() turns the response into a js object
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };
  //delete feeeback
  const deleteFeedback = async (id) => {
    if (window.confirm("Delete this feedback?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };
  //add new feedback
  const addNewFeedback = async (newFeedback) => {
    const res = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };
  const [FeedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //set item to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  //update feedback and submit
  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updItem),
    });
    const data = await res.json();
    setFeedback(
      feedback.map((feedback) =>
        feedback.id === id ? { ...feedback, ...data } : feedback
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
