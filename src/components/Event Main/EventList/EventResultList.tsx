import { useContext } from 'react'
import EventResult from './EventResult'
import './EventResultList.css'

import { BucketListContext } from '../../../context/BucketListContext'
import Grid from '@mui/material/Grid'
import { Box, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import IEventQueryParams from '../../../models/IEventQueryParams'

interface ResultListProps {
  events: any
  setQueryParams: React.Dispatch<React.SetStateAction<IEventQueryParams>>
}

const EventResultList = ({ events, setQueryParams }: ResultListProps) => {
  const handleNext20Records = (e: any): void => {
    e.preventDefault()
    // setQueryParams({ url: events._links.next.href })
  }

  const { bucketList } = useContext(BucketListContext)
  return (
    <div className='ResultsList' style={{ paddingTop: 20 }}>
      <h1 style={{ paddingLeft: 20, backgroundColor: 'ThreeDFace', borderRadius: '10px' }}>
        Events List{' '}
        <Button size='large' style={{ float: 'right', fontSize: 25 }} onClick={handleNext20Records}>
          Next 20 records <NavigateNextIcon />
        </Button>
      </h1>
      <Grid
        container
        style={{
          display: 'grid',
          backgroundColor: 'black',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <Grid item xs={12}>
          {events?._embedded?.events?.map((item: any) => (
            <EventResult key={`${item.id} ${Math.random()}`} event={item} />
          ))}
        </Grid>
      </Grid>
      <Button size='large' style={{ float: 'right', fontSize: 20 }} onClick={handleNext20Records}>
        Next 20 records <NavigateNextIcon />
      </Button>
    </div>
  )
}

export default EventResultList
