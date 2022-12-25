import React from  'react';
import { Table } from 'reactstrap'


const roundStatisticElement = ({roundStats}) => {
    return (
        <tr>
            <td>
                {roundStats.homeScore + roundStats.awayScore}
            </td>
            <td>
                {roundStats.rounds}
            </td>
            <td>
                {roundStats.homeScore} ({Math.round(roundStats.homeScore /roundStats.rounds * 100)/100})
            </td>
            <td>
                {roundStats.awayScore} ({Math.round(roundStats.awayScore /roundStats.rounds * 100)/100})
            </td>
        </tr>
        


        
    );
}
export default roundStatisticElement;