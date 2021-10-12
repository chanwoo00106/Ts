import styled from "styled-components";

export const Wrapper = styled.ul`
    width: 100%;
    height: 80%;
    list-style: none;
    overflow: auto;
    padding: 10px;

    &::-webkit-scrollbar {
        width: 10px;
        margin-left: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0.4);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0,0,0, 0.6);
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 5px;
        background-color: rgba(225,225,225, .6);

        .line {
            text-decoration: line-through;
        }

        .information {
            display: flex;
            gap: 20px;

            .check {
                color: #2be179;
                cursor: pointer;
            }
        }

        .changeInput {
            outline: none;
            border: none;
            padding-right: 10px;
            background: none;
        }

        &:hover {
            background-color: rgba(0,0,0,.1);
        }
        &:not(:hover) {
            transition: .2s;
        }
    }
`;