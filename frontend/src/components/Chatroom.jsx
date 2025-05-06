import React from "react";
import Navbar from "./Navbar";
import "../styles/Chatroom.css";
import lady from "../assets/lady.jpg";
import man from "../assets/man.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";

const Chatroom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="chat">
      <div>
        <Navbar setShowModal={setShowModal} />
      </div>

      <div className="chatsec">
        <div className="chatting left">
          <img className="imgofperson" src={lady} alt="" />
          <div className="actualchat">
            <p>Hey any up for the hackathon ?</p>
          </div>
        </div>

        <div className="chatting right">
          <div className="actualchat">
            <p>Yeah i'm also looking for a team</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>
        <div className="chatting right">
          <div className="actualchat">
            <p>You guys could join our team we got place for 2</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>

        <div className="chatting left">
          <img className="imgofperson" src={lady} alt="" />
          <div className="actualchat">
            <p>Yeah sure ill send you the invite link</p>
          </div>
        </div>
        <div className="chatting right">
          <div className="actualchat">
            <p>Great, lets get this win</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>

        <div className="typing">
          <input className="textfield" type="text" placeholder="Type Here" />
          <button className="btnsend">Send</button>
        </div>
      </div>

      <div className="friendssec">
        <div className="friends">
          <h1>Members</h1>

          <div className="friendname">
            <ol>
              <li>Vaibhav</li>
              <li>Kushagra</li>
              <li>Hamza</li>
              <li>Achintya</li>
              <li>Arpit</li>
              <li>Haider</li>
            </ol>
          </div>
        </div>

        <div className="trends">
          <h1 className="fonts">Latest Trends</h1>

          <div className="friendname">
            <ol>
              <li>Deepseek</li>
              <li>Free copilot</li>
              <li>Income tax</li>
              <li>Budget</li>
            </ol>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-head">
              <h2>Support Chat</h2>
              <IoCloseOutline onClick={() => setShowModal(false)} />
            </div>

            <div className="popup-main">
              <div className="popup-chat">
                <div className="popup-chat-message">
                  <TbMessageChatbot className="popup-chatbot-icon" />
                  <p> Hi what can i help you with?</p>
                </div>
              </div>
              <div className="popup-form">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="type your problem"
                  />
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatroom;
