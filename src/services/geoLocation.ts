import axios from "axios";

export const getLatLong = (address: string): Promise<Geolocation> => {
  console.log("Running");
  return axios
    .get(`https://geocode.maps.co/search?q=${address}`, {
      params: {
        q: address,
      },
    })
    .then((res) => res.data);
};
