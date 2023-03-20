import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import EventHeader from "./EventHeader";
import EventMain from "./EventMain";
import EventDetails from "./EventDetails";
import EventResultList from "./EventResultList";
import Auth from "./Auth";

let loggedIn = JSON.parse(sessionStorage.getItem("logedIn") || "false");
if(loggedIn === "false") {
  loggedIn = false;
}

function App() {

  return (
    <div className="App">
        <Router>
        {loggedIn && <EventHeader /> }
          <Routes>
          {loggedIn && <Route path="/" element={<EventMain />} />}
          {!loggedIn && <Route path="/" element={<Auth />} />}
            {!loggedIn && <Route path="/signin" element={<Auth />} />}
            {loggedIn && <Route path="/search" element={<EventMain />} />}
            {loggedIn &&  <Route path="/event/:id" element={<EventDetails />} />}
            {/* Wildcard - redirect - asterick*/}
            {loggedIn && <Route path="*" element={<Navigate to="/signin" />} />}
            {/* {loggedIn &&  <Route path="/favorites" element={<EventResultList />} />} */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
