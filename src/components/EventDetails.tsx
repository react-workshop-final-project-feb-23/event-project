import './EventDetails.css'
import { useEffect, useState } from "react";
import { getEventById } from '../services/getEventById';
import { useParams } from 'react-router-dom';


const EventDetails = () => {
  const [event, setEvent] = useState<any | undefined>();
  const pathId: string | undefined = useParams().id;
  useEffect(() => {
    if (pathId) {
      getEventById("G5vYZ98KcFtaq")
        .then((res) => {
         console.log('test res', res)
        })
      }
  }, [pathId]);
  return (
    <div className='EventDetails'>
        EventDetails works
    </div>
  )
};

export default EventDetails;
