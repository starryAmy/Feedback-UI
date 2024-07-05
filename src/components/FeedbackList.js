import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "../shared/Spinner";

function FeedbackList({ handleDelete }) {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && !feedback && feedback.length === 0) {
    return <h2>No feedback available</h2>;
  }

  //animation version
  //   return (
  //     <div className="feedback-list">
  //       <AnimatePresence>
  //         {feedback.map((feedback) => (
  //           <motion.div
  //             key={feedback.id}
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //           >
  //             <FeedbackItem
  //               handleDelete={handleDelete}
  //               key={feedback.id}
  //               feedback={feedback}
  //             />
  //           </motion.div>
  //         ))}
  //       </AnimatePresence>
  //     </div>
  //   );
  // }
  // non-animation version

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((feedback) => (
        <FeedbackItem
          handleDelete={handleDelete}
          key={feedback.id}
          feedback={feedback}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
