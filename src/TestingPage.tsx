import { Select, useForm, Validators, Button, useToast } from './lib';
import React, { useState } from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

type DataType = {
    _id: string;
    name: string;
}

const DATA: DataType[] = [
    { _id: '0', name: 'data0' },
    { _id: '1', name: 'data1' },
    { _id: '2', name: 'data2' },
];

type FormType = {
    name: string;
    password: string;
    date: Date;
}

export default function TestingPage(): JSX.Element {
    const [selected, setSelected] = useState<DataType>();

    const toast = useToast(<span></span>, { color: 'danger'});
    
    toast.setContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem nam ducimus, laudantium eos distinctio, architecto doloremque, mollitia non aliquam fugiat? Aperiam rerum obcaecati reprehenderit dignissimos aut beatae adipisci voluptatibus.');

    const [form, getErrors, getValues] = useForm<FormType>([
        { key: 'name', validators: [new Validators.Required(), new Validators.MinLength(4)], initial: 'valor inicial' },
        { key: 'password', validators: [new Validators.Required(), new Validators.MinLength(3), new Validators.MaxLength(6)], inputProps: { type: 'password', placeholder: 'Password', containerType: 'outline' } },
        { key: 'date', validators: [new Validators.Required()], inputProps: { placeholder: 'date', containerType: 'outline', enableDatepicker: true } },
    ]);

    return (
        <div>
            <StyledDiv>
                <Select<DataType> dataKey="name" data={DATA} onSearch={(value) => console.log('search', value)} placeholder="placeholder" value={selected} onSelect={(event, item) => setSelected(item)} loading={true} />
                <Select<DataType> containerType="outline" dataKey="name" data={DATA} onSearch={(value) => console.log(value)} placeholder="placeholder" />
            </StyledDiv>
            {form}
            <Button text="validate" onClick={() => console.log(getErrors(), getValues())} />
            <Button text="open toast" onClick={() => toast.open()} />
        </div>
    );
}