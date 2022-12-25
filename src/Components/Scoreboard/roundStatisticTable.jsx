import React from  'react';
import { Table } from 'reactstrap'
import RoundStatisticElement from './roundStatisticElement'

const roundStatisticTable = ({roundStatsElements}) => {
    return (
        <Table striped>
            <tr>
                <th>Points</th>
                <th>Rounds</th>
                <th>Home</th>
                <th>Away</th>
            </tr>
            <tbody>
                {
                    roundStatsElements.map(stats=>
                        <RoundStatisticElement
                             roundStats={stats} />
                        )
                }
            </tbody>
        </Table>
    );
}
export default roundStatisticTable;