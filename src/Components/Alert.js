import * as React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

export default function DescriptionAlerts(props) {
  return (
    <>
      {props.alert.type === 'Error' ? (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity='error'>
            <AlertTitle>
              <strong>{props.alert.type}</strong>
            </AlertTitle>
            {props.alert.message}
            <strong>   Try again!</strong>
          </Alert>
        </Stack>
      ) : (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity='success'>
            <AlertTitle>
              <strong>{props.alert.type}</strong>
            </AlertTitle>
            {props.alert.message}
          </Alert>
        </Stack>
      )}
    </>
  )
}
