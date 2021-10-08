import styled from "styled-components";

export const Wrapper = styled.ul`
    width: 100%;
    height: 80%;
    list-style: none;
    overflow: auto;
    padding: 10px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 5px;
        box-shadow: 0 0 100000px black;

        .information {
            display: flex;
            gap: 20px;

            .check {
                color: #2be179;
            }
        }

        &:hover {
            background-color: rgba(0,0,0,.1);
        }
        &:not(:hover) {
            transition: .2s;
        }
    }
`;