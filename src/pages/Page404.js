import React from "react";
import Card from "../shared/Card";
import { Navigate, useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();
  const HandleClick = () => {
    //direct page
    navigate("/");
  };
  return (
    <Card>
      <h2>404: Page Not Found</h2>
      <p style={{ textAlign: "center" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={HandleClick}>Go Back</button>
    </Card>
  );
}

export default Page404;
