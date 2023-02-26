import React, { useState } from "react";

const AddCard = ({ addCard }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="add-card-container">
      <span className="add-card-title">Card Title</span>
      <input
        type="text"
        // style={{ flex: "4" }}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        style={{
          //   flex: "1",
          margin: "0 3px",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        Add Card
      </button>
    </div>
  );
};
export default AddCard;
