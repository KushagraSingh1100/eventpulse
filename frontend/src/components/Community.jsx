import React from "react";
import "../styles/Community.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";

function Community() {
  const [showModal, setShowModal] = useState(false);
  useGSAP(() => {
    gsap.from(".community-card", {
      rotateX: 180,
      scale: 0.1,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.from(".navbar", {
      x: -400,
      duration: 0.5,
    });
    gsap.from(".navbar-options", {
      x: -400,
      duration: 0.7,
    });
  });
  return (
    <div className="community-page">
      <Navbar setShowModal={setShowModal} />
      <div className="community-view">
        <h1>Weclome to Communities</h1>
        <div className="communities">
          <Link to="/chat">
            <div className="community-card web-community">
              <h1>Web Dev</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card ai-community">
              <h1>AI/ML</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card data-community">
              <h1>Data Science</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card music-community">
              <h1>Music</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card dance-community">
              <h1>Dance</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card code-community">
              <h1>Coding</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card drama-community">
              <h1>Drama</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card sports-community">
              <h1>Sports</h1>
            </div>
          </Link>
          <Link to="/chat">
            <div className="community-card gaming-community">
              <h1>Gaming</h1>
            </div>
          </Link>
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
}

export default Community;
