import axios from "axios"
import { Dayjs } from 'dayjs'

const api_key: string = process.env.REACT_APP_TICKETMASTER_API_KEY || "";

export async function getEvents(keyword?: string, latlong?: string, startDateTime?: Dayjs, endDateTime?: Dayjs): Promise<any> {
  const params = {
    ...(keyword) && { keyword: keyword },
    ...(latlong) && { latlong: latlong },
    ...(startDateTime) && { startDateTime: `${startDateTime}` },
    ...(endDateTime) && { endDateTime: `${endDateTime}` },
    apikey: api_key
  }

  const data = await axios.get(`https://app.ticketmaster.com/discovery/v2/events`, { params })

  return data.data
}
