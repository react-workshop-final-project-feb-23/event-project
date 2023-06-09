import './EventDetails.css'
import { useState } from 'react'
import { getEventById } from '../../services/getEventById'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import EventSocial from './EventSocial/EventSocial'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined'
import StadiumOutlinedIcon from '@mui/icons-material/StadiumOutlined'
import Map from './Map'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import StadiumDetails from './StadiumDetails'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import moment from 'moment'
import useGetEvents from '../../hooks/useGetEventData'
import Loading from '../shared/Loading'

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 1000,
  },
})

const EventDetails = () => {
  const pathId: string | undefined = useParams().id
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }
  const handleTooltipOpen = () => {
    setOpen(prev => !prev)
  }

  const { data, error, isLoading } = useGetEvents({ id: pathId })
  const event = data?._embedded?.events?.[0]

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <div className='EventDetails'>
          {event && (
            <>
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={5}>
                    <h1>
                      {event?.name} (
                      <a href={event?.url} target='_blank' rel='noreferrer'>
                        <span>
                          <EventSeatOutlinedIcon style={{ fontSize: 35, paddingRight: 5 }} />
                          Link to Event
                        </span>
                      </a>
                      )
                    </h1>
                  </Grid>
                  <Grid item xs={7}>
                    <Box sx={{ width: '100%' }}>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                          <CustomWidthTooltip
                            title={
                              <>
                                <img className='image1' src={event?.seatmap?.staticUrl} alt='the GIF' />
                                Stadium
                              </>
                            }
                            style={{ width: 100, height: 100 }}
                          >
                            <StadiumOutlinedIcon
                              style={{
                                fontSize: 80,
                                paddingTop: 30,
                                paddingRight: 5,
                                color: 'green',
                              }}
                            />
                          </CustomWidthTooltip>
                        </Grid>
                        <Grid item xs={6}>
                          <h2>Venue: {event?._embedded?.venues?.[0]?.name}</h2>
                          <h3>
                            {event?._embedded?.venues?.[0]?.address?.line1},{event?._embedded?.venues?.[0]?.city?.name},
                            {event?._embedded?.venues?.[0]?.state?.name}
                          </h3>
                          <h3>
                            {event?._embedded?.venues?.[0]?.country?.countryCode},
                            {event?._embedded?.venues?.[0]?.postalCode}
                          </h3>
                        </Grid>
                        <Grid item xs={4}>
                          <ClickAwayListener onClickAway={handleTooltipClose}>
                            <CustomWidthTooltip
                              PopperProps={{
                                disablePortal: true,
                              }}
                              onClose={handleTooltipClose}
                              open={open}
                              disableFocusListener
                              disableHoverListener
                              disableTouchListener
                              title={
                                <>
                                  <StadiumDetails event={event} />
                                </>
                              }
                              style={{ width: 100, height: 100 }}
                            >
                              <img
                                className='image1'
                                src={event?._embedded?.venues?.[0]?.images[0]?.url}
                                alt='the GIF'
                                onClick={handleTooltipOpen}
                              />
                            </CustomWidthTooltip>
                          </ClickAwayListener>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <h1 className='title'>
                      <CalendarMonthIcon /> Event Date and Time:
                    </h1>
                    <Box sx={{ width: '100%', paddingLeft: 20 }}>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                          <h2 style={{ paddingLeft: 50 }}>
                            {moment(event?.dates?.start?.localDate, 'Y/M/D').format('dddd, MMMM D, Y')} at{' '}
                            {moment(event?.dates?.start?.localTime, 'h/m/s').format('hh:mm A')}
                          </h2>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <h1 className='title'>
                      <MonetizationOnIcon />
                      Price Range
                    </h1>
                    <Box sx={{ width: '100%' }}>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                          <h2>Min: ${event?.priceRanges?.[0]?.min}</h2>
                        </Grid>
                        <Grid item xs={6}>
                          <h2>Max: ${event?.priceRanges?.[0]?.max}</h2>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {event?._embedded?.attractions?.length > 1 ? (
                <>
                  <Box sx={{ width: '100%', height: '100%', bgcolor: 'lightGray' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={6}>
                        <a href={event?._embedded?.attractions?.[0]?.url} target='_blank' rel='noreferrer'>
                          <img
                            className='image'
                            src={event?._embedded?.attractions?.[0]?.images?.[0]?.url}
                            alt='the GIF'
                          />
                        </a>

                        <EventSocial eventSocial={event?._embedded?.attractions?.[0]} />
                      </Grid>

                      <Grid item xs={6}>
                        <a href={event?._embedded?.attractions?.[1]?.url} target='_blank' rel='noreferrer'>
                          <img
                            className='image'
                            src={event?._embedded?.attractions?.[1]?.images?.[0]?.url}
                            alt='the GIF'
                          />
                        </a>
                        <EventSocial eventSocial={event?._embedded?.attractions?.[1]} />
                      </Grid>
                    </Grid>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <a href={event?._embedded?.attractions?.[0]?.url} target='_blank' rel='noreferrer'>
                          <img
                            className='image'
                            src={event?._embedded?.attractions?.[0]?.images?.[0]?.url}
                            alt='the GIF'
                          />
                        </a>
                        <EventSocial eventSocial={event?._embedded?.attractions?.[0]} />
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}
              <Map event={event} />
            </>
          )}
        </div>
      )}
      {(error || !event) && (
        <p>
          Id of: {pathId} not found. <Link to='/'>Go Home</Link>
        </p>
      )}
    </>
  )
}

export default EventDetails
