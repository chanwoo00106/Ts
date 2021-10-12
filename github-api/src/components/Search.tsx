import React from 'react';
import { Wrapper, Input, Btn } from './Search.styles';

function Search() {
    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <Wrapper>
            <img className="logo" src="./img/logo.png" alt="logo" />
            <form onSubmit={onSubmit} className="search">
                <Input placeholder="Type your github id" />
                <Btn>Submit</Btn>
            </form>
        </Wrapper>
    )
}

export default Search;
