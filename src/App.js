import React from "react";
import "./App.css";
import ChatBotWithVoics from "./components/ChatBotWithVoics";
import MainApp from "./components/MainApp";
import ChatBotWithRedux from "./components/ChatBotWithRedux";

const App = () => {
  return (
    <div>
      <MainApp />
      {/* <ChatBotWithVoics /> */}
      <ChatBotWithRedux />
    </div>
  );
};

export default App;
