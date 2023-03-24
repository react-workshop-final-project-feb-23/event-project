import { useState } from 'react'
import './EventSearchForm.css'

import debounce from 'lodash.debounce'

import { TextField, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Autocomplete from '@mui/material/Autocomplete'
import dayjs, { Dayjs } from 'dayjs'
import { getEvents } from '../../../services/getEvents'
import { getLatLong } from '../../../services/geoLocation'
import { Place } from '../../../models/Geolocation'
import IEventQueryParams from '../../../models/IEventQueryParams'

type Props = {
  setQueryParams: React.Dispatch<React.SetStateAction<IEventQueryParams>>
}

const EventSearchForm = ({ setQueryParams }: Props) => {
  const [keyword, setKeyword] = useState('')
  const [latLong, setLatLong] = useState('')
  const [startTime, setStartTime] = useState<Dayjs | null>(null)
  const [endTime, setEndTime] = useState<Dayjs | null>(null)
  const [options, setOptions] = useState<readonly Place[]>([])
  const [open, setOpen] = useState(false)
  const loading = open && options.length === 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const startISO = startTime ? dayjs(startTime).format() : null
    const endISO = endTime ? dayjs(endTime).format() : null
    setQueryParams({ keyword, latlong: latLong, startDateTime: startISO, endDateTime: endISO })
  }

  const handleChange = debounce(e => {
    getLatLong(e.target.value).then(data => setOptions(data))
  }, 2000)

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
      <Autocomplete
        disablePortal
        loading={loading}
        id='latlong'
        filterOptions={x => x}
        options={options}
        sx={{ width: 300 }}
        getOptionLabel={option => (typeof option === 'string' ? option : option.display_name)}
        onChange={(event, newValue) => setLatLong(`${newValue?.lat},${newValue?.lon}`)}
        renderInput={params => <TextField {...params} label='Lat-Long' onChange={handleChange} />}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
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
