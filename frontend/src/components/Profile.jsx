import React from "react";
import "../styles/Profile.css";
import { CgProfile } from "react-icons/cg";
import { CiShare2 } from "react-icons/ci";
import { TiLocationOutline } from "react-icons/ti";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import { IoCloseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const h1Ref = useRef(null);

  useGSAP(() => {
    const h1 = h1Ref.current;
    const h1Text = h1.textContent;
    const splitText = h1Text.split("");
    const halfval = splitText.length / 2;
    let clutter = "";

    splitText.forEach((elem, idx) => {
      if (idx < halfval) {
        clutter += `<span class="a">${elem}</span>`;
      } else {
        clutter += `<span class="b">${elem}</span>`;
      }
    });

    h1.innerHTML = clutter;

    gsap.from("h1 .a", {
      y: 80,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.15,
      opacity: 0,
    });
    gsap.from("h1 .b", {
      y: 80,
      duration: 0.6,
      delay: 0.5,
      stagger: -0.15,
      opacity: 0,
    });

    var tl = gsap.timeline();
    tl.from(
      ".icons, .head p , .side h2, .side p , .focus h2 ,.focus p , .focus img",
      {
        y: -30,
        duration: 0.4,
        delay: -0.4,
        opacity: 0,
        stagger: 0.2,
      }
    );
  });
  return (
    <div className="profile-page">
      <Navbar setShowModal={setShowModal} />
      <div className="profile-main">
        <div className="profile-head">
          <div className="profile-left">
            {/* <CgProfile className="profile-pic" /> */}
            <img
              src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg"
              alt=""
              className="profile-pic"
            />
            <div>
              <h1 ref={h1Ref}>Pranav&nbsp;Pant</h1>
              <p className="profile-subtext">
                <TiLocationOutline className="profile-icons" />
                Lucknow, India
              </p>
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-links">
              <p>Invite </p>
              <FcInvite />
            </div>
            <div className="profile-links">
              <p>Share</p>
              <CiShare2 />
            </div>
          </div>
        </div>

        <div className="profile-about">
          <div className="profile-side">
            <div>
              <h2>Competitions Participated</h2>
              <div className="participated">
                <p>Technovation</p>
                <p>1/23</p>
              </div>
              <div className="participated">
                <p>Hackathon</p>
                <p>2/23</p>
              </div>
              <div className="participated">
                <p>Dance SRMU Dance</p>
                <p>5/20</p>
              </div>
              <div className="participated">
                <p>Singing Stars</p>
                <p>1/23</p>
              </div>
            </div>
            <div>
              <h2>Competetions Won</h2>
              <div className="participated">
                <p>Singing Stars</p>
              </div>
              <div className="participated">
                <p>Technovation</p>
              </div>
            </div>
          </div>
          <div className="profile-focus">
            <div className="profile-open">
              <div className="profile-first">
                <h2>Interests</h2>
                <p>Coding</p>
                <p>BasketBall</p>
                <p>Designer</p>
                <p>BasketBall</p>
              </div>
              <div className="profile-second">
                <h2>About</h2>
                <p>
                  A passionate web developer eager to lear new and exciting
                  technologies and excited to work on lates tech and new
                  projects.
                </p>
              </div>
            </div>

            <div className="profile-middle">
              <div>
                <h2>Kushagra's Projects</h2>
                <div className="profile-projects">
                  <div className="profile-projects-images">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <p>oneFinance</p>
                  </div>
                  <div className="profile-projects-images">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <p>weather app</p>
                  </div>
                  <div className="profile-projects-images">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <p>oneFinance</p>
                  </div>
                </div>
              </div>

              <div className="profile-portfolio">
                <p>Visit Portfolio</p>
                <FaExternalLinkAlt />
              </div>
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

export default Profile;
