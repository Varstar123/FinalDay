import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br /><br /><br />
        <h1>DATA ENTRY</h1>
        <br /><br />
        <TextField variant="outlined" label="Name"></TextField>
        <br /><br />
        <TextField variant="outlined" label="Age"></TextField>
        <br /><br />
        <TextField variant="outlined" label="Dept"></TextField>
        <br /><br />
        <TextField variant="outlined" label="Salary"></TextField>
        <br /><br />
        <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Add