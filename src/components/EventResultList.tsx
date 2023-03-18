import { useContext } from "react";
import EventResult from "./EventResult";
import "./EventResultList.css";

import { BucketListContext } from "../context/BucketListContext";

const EventResultList = () => {
  const { bucketList } = useContext(BucketListContext);
  return (
    <div className="EventResultList">
      <h1>event list</h1>
      <h2>Bucket List from context: {JSON.stringify(bucketList)}</h2>
      <EventResult />
    </div>
  );
};

export default EventResultList;
