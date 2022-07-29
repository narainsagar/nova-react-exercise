import React from 'react';
import './Chart.css';
import moment from 'moment';

import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar, Legend, Cell, ResponsiveContainer } from 'recharts';

import DATA from './data.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#8884d8", "#82ca9d"];

function formatDate(date: string) {
    return moment(date, 'DD/MM/YYYY').format('MMMM D YYYY');
}

const Chart: React.FC = () => {

    const data = Array.from(new Set([...DATA]))
    // TODO: FIX
    const dataGroupedByMonth = [...data].reduce((group: any, obj: any) => {
        const { date } = obj;
        const month = moment(date, 'DD/MM/YYYY').format('MMMM');
        group[month] = group[month] ?? [];
        group[month].push(obj);
        return group;
    }, {});
    console.log('grouped:', dataGroupedByMonth)

    return (
        <>
            <div style={{ width: '100%', height: '700px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}
                        margin={{
                            top: 100,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" stroke="#8884d8" tickFormatter={formatDate}  />
                        {/* <XAxis dataKey="date" /> */}
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="date" fill="#8884d8" /> */}
                        {/* <Bar dataKey="units" fill="#82ca9d" /> */}
                        <Bar dataKey="units" fill="#8884d8">
                            {
                                data.map((entry: any, index) => {
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
                                    return <Cell fill={color} key={'ss_' + index} />;
                                })
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Chart;
