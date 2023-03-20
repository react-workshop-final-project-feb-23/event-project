import { useContext } from 'react'
import EventResult from './EventResult'
import './EventResultList.css'

import { BucketListContext } from '../../../context/BucketListContext'

interface ResultListProps {
  events: any
}

const EventResultList = ({ events }: ResultListProps) => {
  console.log('test', events)
  const { bucketList } = useContext(BucketListContext)
  return (
    <div className='ResultsList'>
      <h2>Results</h2>
      <ul>
        {events?._embedded?.events?.map((item: any) => (
          <EventResult key={`${item.id} ${Math.random()}`} event={item} />
        ))}
      </ul>
    </div>
  )
}

export default EventResultList
