import React from "react";

const InputText = ({ chatText, setChatText, onEnter }) => {
  const enterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <textarea
      type={"text"}
      id="textData"
      placeholder="type your message here"
      value={chatText}
      onChange={(e) => setChatText(e.target.value)}
      onKeyDown={enterPress}
    />
  );
};

export default InputText;
