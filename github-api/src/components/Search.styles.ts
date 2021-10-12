import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30vw;
    height:60vh;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    margin-top: 50px;
    padding: 50px;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        width: 200px;
        
    }

    .search {
        display: grid;
        grid-template-columns: 8fr 1fr;
        gap: 10px;
        height: 40px;
        margin-bottom: 30px;
    }
`;

export const Input = styled.input`
    max-height: 40px;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #0e0e0e2b;
`;

export const Btn = styled.button`
    max-height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 0 20px;
    background-color: #1885F2;
    color: #ffffff;

    &:hover {
        background-color: #1170cf;
    }
    &:not(:hover) {
        transition: .2s;
    }
`;

export const ResultProfile = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 3fr 7fr;
`;