import React from 'react';
import './Chart.css';

import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar, Legend, Cell } from 'recharts';

const data1 = [{ "date": "28/07/2021", "units": 40 }, { "date": "17/06/2022", "units": 41 }, { "date": "08/01/2022", "units": 95 }, { "date": "01/12/2021", "units": 61 }, { "date": "28/10/2021", "units": 32 }, { "date": "05/12/2021", "units": 92 }, { "date": "08/09/2021", "units": 5 }, { "date": "24/08/2021", "units": 26 }, { "date": "08/09/2021", "units": 84 }, { "date": "13/02/2022", "units": 63 }]

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Chart() {
    return (
        <>
            <BarChart width={730} height={350} data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="units"/>
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="date" fill="#8884d8" /> */}
                {/* <Bar dataKey="units" fill="#82ca9d" /> */}
                <Bar dataKey="units" fill="#8884d8">
                    {
                    data1.map((entry: any, index) => {
                        let color = COLORS[0];
                        if (entry.units < 30) {
                            color = COLORS[0];
                        } else if (entry.units < 50) {
                            color = COLORS[1]
                        } else if (entry.units < 80) {
                            color = COLORS[2]
                        } else {
                            color = COLORS[3]
                        }
                        console.log('color', color, index)
                        return <Cell fill={color} key={'ss_' + index}/>;
                    })
                }
            </Bar>
            </BarChart>
        </>
    );
}

export default Chart;
