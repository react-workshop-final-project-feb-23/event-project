import React, { useState, useEffect } from 'react'
import axios, { AxiosError } from "axios";
import IEventQueryParams from '../models/IEventQueryParams';
import IEvent from '../models/IEvent';

const api_key: string = process.env.REACT_APP_TICKETMASTER_API_KEY || "";

export default function useGetEvents({ keyword, latlong, startDateTime, endDateTime, id, paginationUrl }: IEventQueryParams) {
  const [data, setData] = useState<IEvent[] | any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const params = {
      ...(keyword && { keyword: keyword }),
      ...(latlong && { latlong: latlong }),
      ...(startDateTime && { startDateTime: startDateTime }),
      ...(endDateTime && { endDateTime: endDateTime }),
      ...(id && { id: `${id}` }),
      apikey: api_key,
    }

    async function fetchEventData() {
      try {
        setIsLoading(true)
        setData(null)
        setError(null)
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json`, { params })
        setData(response.data)
      } catch (error: unknown | AxiosError) {
        if (error instanceof Error || error instanceof AxiosError) {
          setError(error.message)
        } else {
          setError(String(error))
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchEventData()
  }, [keyword, latlong, startDateTime, endDateTime, id])

  console.log('error', error)
  return { data, error, isLoading }
}
