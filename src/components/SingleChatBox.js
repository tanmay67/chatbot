import React from "react";
import { FaRobot, FaUserAlt } from "react-icons/fa";

const SingleChatBox = ({ user, data, type, date }) => {
  return (
    <div className="chat_element_container">
      <div className={`chat_element ${user === "1" ? "left" : "right"}`}>
        <div>
          {" "}
          <div className="icon_box">
            <div>
              {user === "1" ? (
                <FaRobot className="robot" />
              ) : (
                <FaUserAlt className="user" />
              )}
            </div>
          </div>
          <div className="input_text">
            {type === "text" ? (
              data
            ) : (
              <audio src={data} controls style={{ width: "100%" }}></audio>
            )}
          </div>
        </div>

        <div className="date_box">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleChatBox;
