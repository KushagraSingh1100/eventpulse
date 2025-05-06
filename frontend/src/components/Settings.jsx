import React from "react";
import Navbar from "./Navbar";
import "../styles/Settings.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="settings-page">
      <Navbar setShowModal={setShowModal} />
      <div className="settings-page-main">
        <h1>Settings</h1>
        <div className="settings-page-list">
          <div className="settings-page-authentication">
            <div className="options">
              Account
              <IoIosArrowForward />
            </div>
            <div className="options">
              Email
              <IoIosArrowForward />
            </div>
            <div className="options">
              Password
              <IoIosArrowForward />
            </div>
          </div>
          <div className="settings-page-events">
            <div className="options">
              Default View{" "}
              <div>
                Upcoming <IoIosArrowForward />
              </div>
            </div>
            <div className="options">
              Default Reminder{" "}
              <div>
                1 day before <IoIosArrowForward />
              </div>
            </div>
            <div className="options">
              Event Privacy
              <input type="checkbox" id="event-privacy" />
              <label htmlFor="event-privacy" className="toggleSwitch"></label>
            </div>
          </div>
          <div className="settings-page-notifications">
            <div className="options">
              Email Notifications{" "}
              <input type="checkbox" id="default-reminder" />
              <label
                htmlFor="default-reminder"
                className="toggleSwitch"
              ></label>
            </div>
            <div className="options">
              Push Notifications
              <input type="checkbox" id="default-view" />
              <label htmlFor="default-view" className="toggleSwitch"></label>
            </div>
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

export default Settings;
