import { useState } from "react";
import "./EventSearchForm.css";

import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs, { Dayjs } from "dayjs";
import { getEvents } from "../../../services/getEvents";
import { getLatLong } from "../../../services/geoLocation";

const EventSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [options, setOptions] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      keyword,
      location,
      dayjs(startTime).toISOString(),
      dayjs(endTime).toISOString()
    );
    getEvents(keyword);
  };

  const onLocationChange = () => {
    console.log("onchange");
    getLatLong(location);
  };
  return (
    <form className="EventSearchForm" onSubmit={handleSubmit}>
      <TextField
        name="keyword"
        value={keyword}
        onChange={(e: any) => setKeyword(e.target.value)}
        type={"text"}
        variant="outlined"
        placeholder="Keyword"
      />
      {/* <TextField
        name="location"
        value={location}
        onChange={(e: any) => setLocation(e.target.value)}
        type={"text"}
        variant="outlined"
        placeholder="Location"
      /> */}
      <Autocomplete
        disablePortal
        id="latlong"
        filterOptions={(x) => x}
        options={options}
        onChange={(e) => console.log("On Change")}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Lat-Long" />}
      />
      <DatePicker
        label="Start Time"
        value={startTime}
        onChange={(value) => setStartTime(value)}
      />
      <DatePicker
        label="End Time"
        value={endTime}
        onChange={(value) => setEndTime(value)}
      />
      <Button variant="contained" type="submit" sx={{ borderRadius: 3 }}>
        Filter Results
      </Button>
    </form>
  );
};

export default EventSearchForm;
