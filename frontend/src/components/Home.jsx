import React, { useEffect } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import bell from "../assets/bell.png";
import img from "../assets/hackathon/image.png";
import search from "../assets/search.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(`http://localhost:8080/public/all-events`);
      let data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      console.log(data)
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
    gsap.from(".card", {
      rotateY: 180,
      duration: 0.5,
      opacity: 0,
      stagger: 0.05,
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
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="home-page">
      <Navbar setShowModal={setShowModal} />
      <div className="homepage">
        <div className="home-top">
          <div className="date">
            <div className="month">
              <h4>
                {date},{monthNames[month]}
              </h4>
            </div>
            <div className="day">
              <h1>{dayNames[day - 1]}</h1>
            </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for an event" />
            <img src={search} alt="" />
          </div>
          <div className="notification">
            <img src={bell} alt="" />
          </div>
        </div>
        {data && (
          <div className="home-bottom">
            <div className="events-calendar">
              {data?.events?.length === 0 ? (
                <p>No current events</p>
              ) : (
                <div className="all-events">
                  <h3>All Events</h3>
                  {data.events.map((event, index) => (
                    <div className="card" key={index}>
                      <div className="tag">
                        {event.tags.map((tag, i) => (
                          <p key={i}>{tag}</p>
                        ))}
                      </div>
                      <div className="event-name">
                        <h1>{event.title}</h1>
                      </div>
                      <div className="date">
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                      <div className="note">
                        <p>Team of {event.team_size}</p>
                      </div>
                      <div className="registered">
                        <h3>
                          {event.registered_participants}/
                          {event.max_participants} Registered
                        </h3>
                      </div>
                      <img src={event.img_url} alt="" />
                    </div>
                  ))}
                </div>
              )}

              <div className="inprogress-events">
                <h3>Current Events</h3>
                <div className="card ">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>Code Fusion</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="card">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>Dance OFF</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img
                    src="https://www.dancewavescompetition.com/media/images/20170808072349_home_banner_01.jpg"
                    alt=""
                  />
                </div>
                <div className="card">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>AI Workshop</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZfDV8i_dXHoxecDagWp8SyAn8KrYT7O0XA&s"
                    alt=""
                  />
                </div>
              </div>
              <div className="upcoming-events">
                <h3>Upcoming Events</h3>
                <div className="card">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>Mic Check</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div className="registered-events">
                <h3>Registered Events</h3>
                <div className="card">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>Apex Oracle Workshop</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZfDV8i_dXHoxecDagWp8SyAn8KrYT7O0XA&s"
                    alt=""
                  />
                </div>
                <div className="card">
                  <div className="tag">
                    <p>#cs</p>
                    <p>#web dev</p>
                  </div>
                  <div className="event-name">
                    <h1>Hackathon</h1>
                  </div>
                  <div className="date">
                    <p>
                      {date},{monthNames[month]}
                    </p>
                  </div>
                  <div className="note">
                    <p>Team of 4</p>
                  </div>
                  <div className="registered">
                    <h3>32/50 Registered</h3>
                  </div>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
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

export default Home;
