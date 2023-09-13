import React from 'react'

import { Table } from '@chakra-ui/react'

function MyCalendar() {
    return (
        <>
            <Table>
                <Table.Caption>Imperial to metric conversion factors</Table.Caption>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>To convert</Table.Th>
                        <Table.Th>into</Table.Th>
                        <Table.Th isNumeric>multiply by</Table.Th>
                    </Table.Tr>
                </Table.Thead>

            </Table>
        </>
    )
}
export default MyCalendar