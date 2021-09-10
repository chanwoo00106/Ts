import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface data {
    [key: string]: string | number | data;
}

const Profile = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setData(data);
            });
    })
    return (
        <>
            {data.map((dt: data, i): JSX.Element => (
                <div className="card" key={i}>
                    <p>name: {dt.name}</p>
                    <p>email: {dt.username}</p>
                    <p>phone: {dt.phone}</p>
                </div>
            ))}
        </>
    )
}

export default Profile
