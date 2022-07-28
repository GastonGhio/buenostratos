import React, { useState } from "react";



export default function ItemCount() {
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter -1)}>-</button>
            <button onClick={() => setCounter(1)}>por defecto</button>
        </div>
    );
    
};