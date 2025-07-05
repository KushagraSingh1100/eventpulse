import React, { useEffect } from "react";
import "../styles/Upcoming.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";

function UpcomingEvents() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const now = new Date();

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(`http://localhost:8080/public/all-events`);
      let data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      console.log(data);
      return data;
    } catch (error) {
      console.error("❌ Fetch error:", error.message);
    }
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const res = await fetchAllEvents();
      setData(res);
    };
    getAllEvents();
  }, []);

  useGSAP(() => {
    gsap.from(".event-card", {
      x: 1000,
      opacity: 0,
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
  
  const colors = [
    "orange",
    "pink",
    "blue",
    "green",
  ];

  const upcomingEvents = data?.events?.filter(
    (event) => new Date(event.date) > now
  );

  return (
    <div className="upcoming-page">
      <Navbar setShowModal={setShowModal} />
      <div className="upcomingPage">
        <div className="heading">
          <h1>Exciting Upcoming Events!!</h1>
        </div>
        {data && (
          <div className="events">
            {upcomingEvents.map((event, index) => (
              <div className={`event-card ${colors[index % colors.length]}`} key={index}>
                <img src={event.img_url} alt="" />
                <div className="about-event">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <div className="event-register-options">
                  <div className="register">
                    <button>Register</button>
                  </div>
                  <div className="timing">
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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

export default UpcomingEvents;
