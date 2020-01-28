import React from 'react';

export default function Item2({next, prev, data}) {
    return <div>
        <h1>Item 2</h1>

        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>

        <button onClick={prev}>cancel (1)</button>
        <button onClick={next}>next (finish)</button>
    </div>;
}