import styled from 'styled-components';


export const Wrapper = styled.div`
    background-color: #ffffff;
    width: 30vw;
    height: 70vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 10px;

    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
`;

export const AddTodo = styled.form`
    display: grid;
    grid-template-columns: 6fr 2fr 2fr;
    gap: 10px;
    margin: 20px 0;

    input {
        min-height: 35px;
        outline: none;
        border: none;
        font-size: 1.5rem;
        border-bottom: 2px solid #48f592;
    }

    .date {
        font-size: .7rem;
        text-align: center;
    }

    button {
        outline: none;
        border: none;
        background-color: #48f592;
        border-radius: 10px;
        font-size: 1.2rem;

        &:hover{
            background-color: #2be179;
        }
        &:not(:hover){
            transition: .2s;
        }
    }
`;