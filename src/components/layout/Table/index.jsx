import React from 'react'
import { TableContainer } from './style'

const Table = ({ children }) => {
    return (
        <TableContainer>
            {children}
        </TableContainer>
    )
}

export default Table