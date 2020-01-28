import React, {useState, useEffect, useCallback, useMemo} from 'react';

export default function SequenceManager({items}) {
    if (!items || !items.length === 0) {
        throw new Error('items shouldn\'t be empty')
    }

    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [currentData, setCurrentData] = useState(null);

    // reset effect
    useEffect(() => {
        setCurrentData(null);
        setCurrentItemIndex(0);
    }, [items]);

    const next = useCallback((data) => {
        if (currentItemIndex + 1 < items.length) {
            if(data !== undefined) {
                console.log('set data');
                setCurrentData(data);
            }

            setCurrentItemIndex(currentItemIndex + 1);
        } else {
            alert('exit');
        }
        console.log('next', currentItemIndex, data);
    }, [currentItemIndex, items.length]);

    const prev = useCallback((data) => {
        console.log('prev', currentItemIndex);

        if (currentItemIndex - 1 >= 0) {
            setCurrentData(data);

            setCurrentItemIndex(currentItemIndex - 1);
        } else {
            alert('exit');
        }
    }, [currentItemIndex]);

    const CurrentItem = items[currentItemIndex];

    console.log('current data', currentData);
    return <div>
        <h1>Sequence manager</h1>
        <CurrentItem next={next} prev={prev} data={currentData}/>
    </div>;
}