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

function App() {
  return (
    <div className="App">
      <Router>
        <EventHeader />
        <Routes>
          <Route path="/" element={<EventMain/>} />
          <Route path="/search" element={<EventMain/>} />
          <Route path="/event/:id" element={<EventDetails/>} />
          {/* Wildcard - redirect - asterick*/}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/favorites" element={<EventResultList/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
