import './EventMain.css'
import EventResultList from './EventList/EventResultList'
import EventSearchForm from './EventSearch/EventSearchForm'
import { useEffect, useState } from 'react'
import { getAllEvents, getNext20EventsList } from '../../services/getEventById'
import useGetEvents from '../../hooks/useGetEventData'
import IEventQueryParams from '../../models/IEventQueryParams'
import Loading from '../shared/Loading'

const EventMain = () => {
  const [queryParams, setQueryParams] = useState<IEventQueryParams>({})
  let { data, error, isLoading } = useGetEvents(queryParams)

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>The following error occured: {error}</p>}
      <div className='EventMain'>
        <EventSearchForm setQueryParams={setQueryParams} />
        {data && <EventResultList events={data} setQueryParams={setQueryParams} />}
      </div>
    </>
  )
}

export default EventMain
