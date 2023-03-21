import { useContext } from "react";
import EventResult from "./EventResult";
import "./EventResultList.css";

import { BucketListContext } from "../../../context/BucketListContext";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

interface ResultListProps {
  events: any;
}

const EventResultList = ({ events }: ResultListProps) => {
  console.log("test", events);
  const { bucketList } = useContext(BucketListContext);
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <Grid container  style={{ display: 'grid' }} >
        <Grid item >
          {events?._embedded?.events?.map((item: any) => (
            <EventResult key={`${item.id} ${Math.random()}`} event={item} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default EventResultList;
