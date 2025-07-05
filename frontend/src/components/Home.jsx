import { useEffect } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import bell from "../assets/bell.png";
import search from "../assets/search.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";

function Home() {
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
      console.log(day);
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
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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

  const upcomingEvents = data?.events?.filter(
    (event) => new Date(event.date) > new Date()
  );

  const currentEvents = data?.events?.filter((event) => {
    const start = new Date(event.date);
    const end = new Date(
      start.getTime() + event.duration * 24 * 60 * 60 * 1000
    );
    return start <= now && end > now;
  });

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
              <h1>{dayNames[day]}</h1>
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
                <p>No events</p>
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
                {currentEvents.length === 0 ? (
                  <p>No Current Events</p>
                ) : (
                  currentEvents.map((event, index) => (
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
                  ))
                )}
              </div>
              <div className="upcoming-events">
                <h3>Upcoming Events</h3>
                {upcomingEvents.length === 0 ? (
                  <p>No upcoming events</p>
                ) : (
                  upcomingEvents.map((event, index) => (
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
                  ))
                )}
              </div>
              <div className="registered-events">
                <h3>Registered Events</h3>
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
                        {event.registered_participants}/{event.max_participants}{" "}
                        Registered
                      </h3>
                    </div>
                    <img src={event.img_url} alt="" />
                  </div>
                ))}
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
