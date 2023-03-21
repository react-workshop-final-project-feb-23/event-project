import { useState } from 'react'
import './EventSearchForm.css'

import { TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'

const EventSearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs('2022-04-17'))
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs('2022-04-17'))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(keyword, location, dayjs(startTime).toISOString(), dayjs(endTime).toISOString())
  }
  return (
    <form className='EventSearchForm' onSubmit={handleSubmit}>
      <TextField
        name='keyword'
        value={keyword}
        onChange={(e: any) => setKeyword(e.target.value)}
        type={'text'}
        variant='outlined'
        placeholder='Keyword'
      />
      <TextField
        name='location'
        value={location}
        onChange={(e: any) => setLocation(e.target.value)}
        type={'text'}
        variant='outlined'
        placeholder='Location'
      />
      <DatePicker label='Start Time' value={startTime} onChange={value => setStartTime(value)} />
      <DatePicker label='End Time' value={endTime} onChange={value => setEndTime(value)} />
      <Button variant='contained' type='submit' sx={{ borderRadius: 3 }}>
        Filter Results
      </Button>
    </form>
  )
}

export default EventSearchForm
