import React from 'react';
import { useParams } from 'react-router-dom';

interface pram {
    id: string | undefined
}

const Home = () => {
    const params: pram = useParams();
    return (
        <div>
            <div>this Page is home</div>
            <div>param : {params.id}</div>
        </div>
    )
}

export default Home
