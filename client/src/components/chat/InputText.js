import React from "react";
import "./chatStyles/InputText.css";

// Input Text field; passing in and destructuring props from Chatroom
function InputText({ userMessage, setUserMessage, sendUserMessages }) {
  return (
    <form className="form-input">
      <input
        className="input-text"
        type="text"
        placeholder="Enter a message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? sendUserMessages(e) : null)}
      />
      <button className="button-two" onClick={(e) => sendUserMessages(e)}>
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
    </form>
  );
}

export default InputText;
