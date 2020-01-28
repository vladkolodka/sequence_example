import React, {useState, useEffect, useCallback, useMemo} from 'react';

export default function SequenceManager({items}) {
    if (!items || !items.length === 0) {
        throw new Error('items shouldn\'t be empty')
    }

    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [itemData, setItemData] = useState([]);
    const [currentData, setCurrentData] = useState(null);

    // reset effect
    useEffect(() => {
        setItemData([]);
        setCurrentItemIndex(0);
    }, [items]);

    useEffect(() => {
        setCurrentData(itemData.length ? itemData[itemData.length - 1] : null);
    }, [itemData]);

    const next = useCallback((data) => {
        if (currentItemIndex + 1 < items.length) {
            if(data !== undefined) {
                console.log('set data');
                setItemData([...itemData, data]);
            }

            setCurrentItemIndex(currentItemIndex + 1);
        } else {
            alert('exit');
        }
        console.log('next', currentItemIndex, data);
    }, [currentItemIndex, itemData, items.length]);

    const prev = useCallback(() => {
        console.log('prev', currentItemIndex);

        if (currentItemIndex - 1 >= 0) {
            itemData.pop();
            
            setItemData(itemData);


            setCurrentItemIndex(currentItemIndex - 1);
        } else {
            alert('exit');
        }
    }, [currentItemIndex, itemData]);

    const CurrentItem = items[currentItemIndex];

    return <div>
        <h1>Sequence manager</h1>
        <CurrentItem next={next} prev={prev} data={currentData}/>
    </div>;
}