import React, { FC } from 'react'

export interface Info {
    username: string;
    email: string;
    age: number;
    location: string[];
}

const UserInfo: FC<Info> = ({
    username,
    email,
    age,
    location }) => {
    return (
        <>
            <li>{username}</li>
            <li>{email}</li>
            <li>{age}</li>
            <li>{location}</li>
        </>
    )
}

export default UserInfo