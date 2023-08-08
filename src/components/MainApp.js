import React from "react";

const MainApp = () => {
  return (
    <div className="main-app">
      <h1>Welcome to ChatBot</h1>
      <h3 className="description">
        At the bottom right corner you can see a chatbot icon{" "}
        <span>
          <img
            src="https://img.icons8.com/stickers/100/null/chatbot.png"
            alt="icon"
          />
        </span>{" "}
        It will help you answer all your queries
      </h3>
      <br />
      <h4>Points covered are:</h4>
      <ul>
        <li>Create a Github repository</li>
        <li>
          Implement a chat UI where users can send and receive messages in
          real-time (Use OpenAI APIs 🤖🔐)
        </li>
        <li>
          The UI should have a list of chat messages, an input field to type
          messages, and a send button
        </li>
        <li>
          Messages should be displayed with the conversation name, timestamp,
          and content datealarm_clockscroll
        </li>
        <li>The data does not need to be persistent</li>
        <li>The app should look beautiful</li>
      </ul>

      <br></br>
      <h4>Tech Stack used are:</h4>
      <ul>
        <li>React JS</li>
        <li>CSS</li>
        <li>Redux</li>
        <li>react-icons</li>
        <li>react-speech-kit</li>
      </ul>

      <br></br>
      <h4>Requirements Covered:</h4>
      <ul>
        <li>
          Used ReactJS instead of NextJS (which is a must to learn if you about
          to use NextJS)
        </li>
        <li>The application is accessable via Netlify</li>
        <li>
          Instructions to run the App are here on the main page, as well as in
          README file
        </li>
        <li>
          The app should handle chat with real-time streaming (similar to
          ChatGPT / ChatNBX) globe_with_meridianssatellite
        </li>
      </ul>

      <br></br>
      <h4>Bonus Points Covered:</h4>
      <ul>
        <li>
          Haven't used anything except bare minimun ReactJS, not even a CSS
          Framework
        </li>
        <li>UI is responsive and works well on different screen sizes</li>
      </ul>

      <br></br>
      <h4>Ultra Bonus Points</h4>
      <ul>
        <li>Implemented Redux for State Management</li>
      </ul>

      <br></br>
      <h4>Points to keep in mind</h4>
      <ul>
        <li>
          Haven't changes the fonts, focused more on functionality as well as
          responsiveness
        </li>
        <li>
          There is no need to implement Redux in this app, as it is too small to
          implemenet redux
        </li>
        <li>Have implemented both in Redux as well as with State</li>
      </ul>
    </div>
  );
};

export default MainApp;
