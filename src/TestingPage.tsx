import { Select } from './lib';
import React, { useState } from 'react';

type DataType = {
    _id: string;
    name: string;
}

const DATA: DataType[] = [
    { _id: '0', name: 'data0' },
    { _id: '1', name: 'data1' },
    { _id: '2', name: 'data2' },
]; 

export default function TestingPage(): JSX.Element {
    const [selected, setSelected] = useState<DataType>();
    return (
        <div>
            <Select<DataType> dataKey="name" data={DATA} onSearch={(value) => console.log(value)} placeholder="placeholder" value={selected} onSelect={(event, item) => setSelected(item)} loading={true} />
            <Select<DataType> dataKey="name" data={DATA} onSearch={(value) => console.log(value)} placeholder="placeholder" />
        </div>
    );
}