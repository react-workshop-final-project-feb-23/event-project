import axios from "axios"

const api_key: string = process.env.REACT_APP_GIPHY_API_KEY || "";



export const getEventById = (event_Id: string): Promise<any> => {
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events/${event_Id}`, {
        params: {
            apikey: api_key
        },
    }).then((res) => res.data);
}