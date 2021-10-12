import React, { useState } from 'react';
import { Wrapper, Input, Btn, ResultProfile } from './Search.styles';

function Search() {
    const [id, setId] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setId(e.target.value);

    return (
        <Wrapper>
            <img className="logo" src="./img/logo.png" alt="logo" />
            <form onSubmit={onSubmit} className="search">
                <Input value={id} onChange={onChange} placeholder="Type your github id" />
                <Btn>Submit</Btn>
            </form>
            <ResultProfile>
                <img src="img" alt="profile-img" />
                <div className="information">
                    <h3 className="nickname">title</h3>
                    <p className="bio">bio</p>
                    <p className="stars">stars</p>
                </div>
            </ResultProfile>
        </Wrapper>
    )
}

export default Search;
