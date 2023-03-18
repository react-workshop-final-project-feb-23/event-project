import "./EventDetails.css";
import { useEffect, useState } from "react";
import { getEventById } from "../services/getEventById";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


const EventDetails = () => {
  const [event, setEvent] = useState<any | undefined>();
  const pathId: string | undefined = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathId) {
      getEventById("G5vYZ98KcFtaq").then((res) => {
        console.log("test res", res);
        if (res) {
          setEvent(res);
        } else {
          //navigate
        }
      }).catch((err) => navigate("/"));
    }
  }, [pathId]);

  return (
    <div className="EventDetails">
      {event ? (
        <>
          <h3>{event?.name}</h3>
          <img src={event?.images[0].url} alt="the GIF" />
          <p className=".link">
            <a href={event?.url} target="_blank" rel="noreferrer">
              Link to Event
            </a>
          </p>
        </>
      ) : (
        <p>
          Id of: {pathId} not found. <Link to="/">Go Home</Link>
        </p>
      )}{" "}
    </div>
  );
};

export default EventDetails;
