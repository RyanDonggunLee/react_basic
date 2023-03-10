import React, {useState} from "react";

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>
                {count} <span className='total'>/{total}</span>
            </p>
            <button className='button' onClick={() => {
                setCount(count + 1);
            }}>Add +</button>
        </div>
    );
}