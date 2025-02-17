import React, { type ReactNode } from 'react'

interface IUser {
    name: string;
    age: number;
    isStudent: boolean;
    children?: ReactNode
}

const User = ({ name, age, isStudent, children }: IUser) => {
    return (
        <main>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{isStudent}</h2>
            {children}
        </main>
    )
}

export default User;