import React from "react";
import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    return(
        <>
            <h1>helo app{count}</h1>
            <button onClick={() => setCount(count + 1)}>alo</button>
            <button onClick={() => setCount(count -2)}>xuong</button>
        </>
    )
}

export default Count