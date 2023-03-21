import { useContext } from "react";
import EventResult from "./EventResult";
import "./EventResultList.css";

import { BucketListContext } from "../../../context/BucketListContext";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface ResultListProps {
  events: any;
  setNext20RecordsParams: (s: string) => void;
}

const EventResultList = ({
  events,
  setNext20RecordsParams,
}: ResultListProps) => {
  const handleNext20Records = (e: any): void => {
    e.preventDefault();
    setNext20RecordsParams(events._links.next.href);
  };

  console.log("test", events);
  const { bucketList } = useContext(BucketListContext);
  return (
    <div className="ResultsList">
      <h2>
        Results{" "}
        <Button
          size="large"
          style={{ float: "right", fontSize: 20 }}
          onClick={handleNext20Records}
        >
          Next 20 records <NavigateNextIcon/>
        </Button>
      </h2>
      <Grid container style={{ display: "grid" }}>
        <Grid item  xs={12}>
          {events?._embedded?.events?.map((item: any) => (
            <EventResult key={`${item.id} ${Math.random()}`} event={item} />
          ))}
        </Grid>
      </Grid>
      <Button
          size="large"
          style={{ float: "right", fontSize: 20 }}
          onClick={handleNext20Records}
        >
          Next 20 records <NavigateNextIcon/>
        </Button>
    </div>
  );
};

export default EventResultList;