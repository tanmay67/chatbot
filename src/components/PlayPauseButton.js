import React from "react";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

const PlayPauseButton = ({ bool, setBool }) => {
  return !bool ? (
    <BsFillPlayFill
      onClick={() => {
        setBool(!bool);
      }}
      style={{ color: "green" }}
    />
  ) : (
    <BsFillStopFill
      onClick={() => {
        setBool(!bool);
      }}
      style={{ color: "red" }}
    />
  );
};

export default PlayPauseButton;
