import React from 'react'
import { Container } from 'reactstrap'
import '../css/statistics/Statistics-Page.css'

import { useState } from "react";
import { Data } from "../Utils/Data.js"
import LineChart from "../Components/Statistics/lineChart";

const StatisticPage = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
 //       data: Data.map((data) => data.userGain),
        data: ([5,6,7,8,9]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      },
      {
        label: "Users Gained ",
 //       data: Data.map((data) => data.userGain),
        data: ([1,2,3,4,5]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
      });
    return (
        <div className='statistic-page-layout'>
            <div className='statistic-table-container'>
                Statistics Table
            </div>
            <div className='statistic-plot-container'>
                <LineChart chartData={chartData}/>
            </div>
        </div>
    )
}
export default StatisticPage