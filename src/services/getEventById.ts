import axios from "axios"

const api_key: string = process.env.REACT_APP_TICKETMASTER_API_KEY || "";
const url: string = 'https://app.ticketmaster.com'


export const getEventById = (event_Id: string): Promise<any> => {
    return axios.get(`${url}/discovery/v2/events/${event_Id}`, {
        params: {
            apikey: api_key
        },
    }).then((res) => res.data);
}


export const getAllEvents = (): Promise<any> => {
    return axios.get(`${url}/discovery/v2/events.json`, {
        params: {
            apikey: api_key
        },
    }).then((res) => res.data);
}

export const getNext20EventsList = (eventUrl: string): Promise<any> => {
    return axios.get(`${url}${eventUrl}`, {
        params: {
            apikey: api_key
        },
    }).then((res) => res.data);
}