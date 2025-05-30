import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Community from "./components/Community";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import Registered from "./components/Registered";
import Profile from "./components/Profile";
import Chatroom from "./components/Chatroom";
import Teams from "./components/Teams";
import Settings from "./components/Settings";

import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Router>
        <div className={showModal ? "blur-background" : ""}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setShowModal={setShowModal} />}
            />
          </Routes>
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route exact path="/signin" element={<Signin />} />
          </Routes>
          <Routes>
            <Route exact path="/community" element={<Community />} />
          </Routes>
          <Routes>
            <Route exact path="/upcoming" element={<UpcomingEvents />} />
          </Routes>
          <Routes>
            <Route exact path="/recent" element={<PastEvents />} />
          </Routes>
          <Routes>
            <Route exact path="/registered" element={<Registered />} />
          </Routes>
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route exact path="/chat" element={<Chatroom />} />
          </Routes>
          <Routes>
            <Route exact path="/team" element={<Teams />} />
          </Routes>
          <Routes>
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
