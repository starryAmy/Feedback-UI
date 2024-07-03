import React, { useEffect } from "react";
import Card from "../shared/Card";
import { useState, useContext } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addNewFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const handleTextChange = (e) => {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (e.target.value !== "" && e.target.value.trim().length <= 10) {
      console.log(e.target.value);
      console.log(e.target.value.trim().length);
      setBtnDisabled(true);
      setMessage("Please enter a review longer than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating: rating,
        text: text,
      };
      if (FeedbackEdit.edit === true) {
        updateFeedback(FeedbackEdit.item.id, newFeedback);
      } else {
        addNewFeedback(newFeedback);
      }

      setText("");
    }
  };
  //handle edit, whenever FeedbackEdit changes, useEffect will run
  useEffect(() => {
    if (FeedbackEdit.edit === true) {
      setRating(FeedbackEdit.item.rating);
      setText(FeedbackEdit.item.text);
    }
  }, [FeedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            //value={text} to ensure this input's value is controlled by the state
            value={text}
          ></input>
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
