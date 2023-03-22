import "./EventMain.css";
import EventResultList from "./EventList/EventResultList";
import EventSearchForm from "./EventSearch/EventSearchForm";
import { useEffect, useState } from "react";
import { getAllEvents, getNext20EventsList } from "../../services/getEventById";

const EventMain = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [next20RecordsParams, setNext20RecordsParams] = useState("");

  useEffect(() => {
    if (next20RecordsParams) {
      getNext20EventsList(next20RecordsParams).then((res) => setEvents(res));
    } else {
      getAllEvents().then((res) => setEvents(res));
    }
  }, [next20RecordsParams]);

  return (
    <div className="EventMain">
      <EventSearchForm setEvents={setEvents} />
      <EventResultList
        events={events}
        setNext20RecordsParams={setNext20RecordsParams}
      />
    </div>
  );
};

export default EventMain;
