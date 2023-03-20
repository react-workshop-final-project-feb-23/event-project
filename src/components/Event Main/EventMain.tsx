import './EventMain.css'
import EventResultList from './EventList/EventResultList'
import EventSearchForm from './EventSearch/EventSearchForm'
import { useEffect, useState } from 'react'
import { getAllEvents } from '../../services/getEventById'

const EventMain = () => {
  const [events, setEvents] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getAllEvents().then(res => setEvents(res))
  }, [])

  return (
    <div className='EventMain'>
      <EventSearchForm />
      <EventResultList events={events} />
    </div>
  )
}

export default EventMain