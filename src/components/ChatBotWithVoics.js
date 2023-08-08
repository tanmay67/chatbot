import React, { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { GrSend } from "react-icons/gr";
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import SingleChatBox from "./SingleChatBox";
import InputText from "./InputText";
import PlayPauseButton from "./PlayPauseButton";

const ChatBotWithVoics = () => {
  const [clicked, setClicked] = useState(false);
  const [chatArray, setChatArray] = useState([
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [chatText, setChatText] = useState("");
  const [current, setCurrent] = useState("body");
  const [bool, setBool] = useState(false);

  const [stream, setStream] = useState(null);
  const [expand, setExpand] = useState(false);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const chatClickFun = () => {
    setClicked(!clicked);
  };

  const sendMessage = () => {
    let textValue = chatText;
    if (textValue !== "") {
      setLoading(true);
      setChatArray((prevData) => {
        let data = [...prevData];
        data.push({
          user: "2",
          type: "text",
          data: textValue,
          date: Date()
            .toLocaleString()
            .replace("GMT+0530 (India Standard Time)", "")
            .trim(),
        });
        return data;
      });
      let dataObj = {
        type: "text",
        message: textValue,
      };
      apiCall(dataObj);
    }
  };

  const apiCall = async (dataObj) => {
    // let formData = dataObj;

    // try {
    //   const resp = await axios.post(
    //     "https://2359-139-5-254-148.ngrok.io/predict",
    //     formData
    //   );
    //   let reply = resp.data.answer;
    //   setChatArray((prevData) => {
    //     let data = [...prevData];
    //     data.push({
    //       user: "1",
    //       type: "text",
    //       data: reply,
    //     });
    //     return data;
    //   });
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }

    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Host", "chatgpt-api8.p.rapidapi.com");
    myHeaders.append(
      "X-RapidAPI-Key",
      "c5f929b6d4msh646afb7625ead77p16e1a2jsn430bd23951d2"
    );
    myHeaders.append("content-type", "application/json");

    var raw = JSON.stringify([
      {
        content: "who is narender modi?",
        role: "user",
      },
    ]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://chatgpt-api8.p.rapidapi.com/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result.message);
        setChatArray((prevData) => {
          let data = [...prevData];
          data.push({
            user: "1",
            type: "text",
            data: result.message.split(" ")[0],
            date: Date()
              .toLocaleString()
              .replace("GMT+0530 (India Standard Time)", "")
              .trim(),
          });

          return data;
        });

        let msg = result.message;
        let strArr = msg.split(" ");
        let str = "";
        for (let i = 0; i <= strArr.length - 1; i++) {
          setTimeout(() => {
            str = str + " " + strArr[i];
            console.log(str);
            console.log(chatArray[chatArray.length - 1].data);
            setChatArray((prevData) => {
              let data = [...prevData];
              data[data.length - 1].data = str;
              return data;
            });
          }, 200 * i);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const getStateSetter = (result) => {
    switch (current) {
      case "body":
        setChatText((prev) => prev + " " + result);
        break;
      default:
        return null;
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      console.log(supported);
      getStateSetter(result);
    },
  });

  useEffect(() => {
    if (!bool) {
      stop();
    } else {
      if (current !== "") {
        //   if (!supported) alert("Speech recognition is not supported");
        if (current === "body") {
          listen({ interimResults: false });
        } else {
          listen();
        }
      }
    }
  }, [current, listen, bool]);

  useEffect(() => {
    let scroll_to_bottom = document.getElementById("textData");
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  }, [chatText]);

  useEffect(() => {
    let scroll_to_bottom = document.getElementById("text");
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
    setChatText("");
  }, [chatArray]);

  return (
    <div className={` ${expand ? "chat_container_expand" : "chat_container"}`}>
      <div
        className={`chat_box ${expand && "chat_box_expand"} ${
          clicked ? "chat_box_visible" : "chat_box_notvisible"
        }`}
      >
        <div className="chat_box_header">
          <span>ChatBot</span>
          <span className="chat_box_header_buttons">
            {expand ? (
              <AiOutlineShrink
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("expand");
                  setExpand(!expand);
                }}
              />
            ) : (
              <AiOutlineExpandAlt
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("expand");
                  setExpand(!expand);
                }}
              />
            )}

            <IoMdClose
              style={{ cursor: "pointer", display: expand ? "none" : "block" }}
              onClick={chatClickFun}
            />
          </span>
        </div>
        <div className="chat_box_body">
          <div className="chat_texts" id="text">
            {chatArray.map((chat, index) => (
              <SingleChatBox
                key={index}
                user={chat.user}
                data={chat.data}
                type={chat.type}
                date={chat.date}
              />
            ))}
          </div>
          <div
            className={`loading_block ${
              loading ? "fetching_block" : "fetched_block"
            }`}
          >
            fetching...
          </div>
          <div className="chat_input">
            <InputText
              chatText={chatText}
              setChatText={(e) => setChatText(e)}
              onEnter={sendMessage}
            />
            <PlayPauseButton bool={bool} setBool={(e) => setBool(e)} />

            <GrSend onClick={sendMessage} />
          </div>
        </div>
      </div>
      <div
        className={expand ? "chat_icon_expand" : "chat_icon"}
        onClick={chatClickFun}
      >
        <img src="https://img.icons8.com/stickers/100/null/chatbot.png" />
      </div>
    </div>
  );
};

export default ChatBotWithVoics;
