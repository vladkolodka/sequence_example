import React from 'react';

export default function Item1({next, prev, data}) {

    function onFormSubmit() {
        const newData = {
            name: 'username',
            age: 18,
            date: Date()
        };

        next(data || newData);
    }

    return <div>
        <h1>Item 1</h1>

        {data && <div>
            <div>{data.name}</div>
            <div>{data.age}</div>
            <div>{data.date}</div>
        </div>}

        <button onClick={prev}>cancel (end)</button>
        <button onClick={onFormSubmit}>next (2)</button>
    </div>;
}