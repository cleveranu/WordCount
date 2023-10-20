import React, { useState } from "react";

const YourComponent = () => {
  const [text, setText] = useState("");
  const containerStyle = {
    background: "linear-gradient(to right, #7ac07a, #b6b6dc)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    border: "2px solid #cfcfcf",
    borderRadius: "12px",
  };
  const boxStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const textStyle = {
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const textareaStyle = {
    width: "350px",
    height: "200px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "16px",
    boxSizing: "border-box",
    margin: "20px auto",
    display: "block",
  };

  const countWords = () => {
  
    const trimmedText = text.trim();

   
    if (trimmedText === "") {
      return 0;
    }
  
    const words = trimmedText.split(/\s+/);

    return words.length;
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={textStyle}>Responsive Paragraph Word Counter</div>
        <textarea
          style={textareaStyle}
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div>Word Count: {countWords()}</div>
      </div>
    </div>
  );
};

export default YourComponent;
