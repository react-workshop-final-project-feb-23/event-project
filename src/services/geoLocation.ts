import axios from "axios";
import { Place } from "../models/Geolocation";

export const getLatLong = (address: string): Promise<readonly Place[]> => {
  return axios
    .get(`https://geocode.maps.co/search?q=${address}`, {
      params: {
        q: address,
      },
    })
    .then((res) => res.data);
};
