import './EventResult.css'
import { Link } from "react-router-dom";


interface ResultProps {
  event: any;
}

const EventResult = ({event}:ResultProps) => {
  return (
    <li className="Result">
    <Link to={`/event/${event.id}`}>
      <h3>{event.name}</h3>
      <img  src={event.images[0].url} alt="the GIF" />
    </Link>
    <p className=".link">
      <a href={event.images[0].url} target="_blank" rel="noreferrer">
        Link to Giphy
      </a>
    </p>
  </li>
  )
};

export default EventResult;
