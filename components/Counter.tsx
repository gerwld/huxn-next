"use client";

import React, { useState } from 'react'

interface ISomeArrayItem {
    id: number,
    title: string
}

type ICounterState = {
    name: string,
    age: number,
    somearray: ISomeArrayItem[]
}

const Counter = () => {
    const [cout, setCount] = useState<ICounterState>({
        name: "erg",
        age: 22,
        somearray: [{
            id: 123, title: "title"
        }]
    });
    return (
        <div>Counter</div>
    )
}

export default Counter