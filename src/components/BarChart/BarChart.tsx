import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function formatDate(date: string) {
    return moment(date, 'DD/MM/YYYY').format('MMM D, YY');
}

function randomColor(someNumber: number) {
    return ('#' + Math.floor(Math.random() * (16777215 + someNumber)).toString(16));
}

const Chart: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simple GET request using axios
        axios.get('https://my.api.mockaroo.com/graph.json?key=158c1970')
            .then(resp => {
                console.log('resp:', resp.data)
                setData(resp.data)
            })
    }, [])

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <h1 style={{ textAlign: 'center' }}>Daily Sales Data</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}
                    margin={{
                        right: 50,
                        left: 50,
                    }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tickFormatter={formatDate} />
                    <YAxis dataKey="units" />
                    <Tooltip />
                    <Bar dataKey="units" fill="#8884d8">
                        {
                            data.map((entry: any, index: number) => {
                                return <Cell fill={randomColor(index)} />;
                            })
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
