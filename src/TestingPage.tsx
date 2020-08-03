import { Select } from './lib';
import React from 'react';

type DataType = {
    _id: string;
    name: string;
}

const DATA: DataType[] = [
    { _id: '0', name: 'data0' },
    { _id: '1', name: 'data1' },
    { _id: '2', name: 'tatiane lindona' },
]; 

export default function TestingPage(): JSX.Element {
    return (
        <div>
            <Select<DataType> dataKey="name" data={DATA} onSearch={(value) => console.log(value)} />
        </div>
    );
}