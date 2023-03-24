import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function Loading() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', marginTop: '128px' }}
    >
      <CircularProgress size={160} />
    </Box>
  )
}
