import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const View = () => {
    var [data,setdata] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ((res) => {
        setdata(res.data)
    })
  return (
    <div>
        <br /><br /><br />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Age</TableCell>
                        <TableCell align='right'>Dept</TableCell>
                        <TableCell align='right'>Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val) => {
                    return(
                        <TableRow>
                            <TableCell align='right'>{val.name}</TableCell>
                            <TableCell align='right'>{val.username}</TableCell>
                            <TableCell align='right'>{val.email}</TableCell>
                            <TableCell align='right'>{val.address.street}</TableCell>
                        </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View