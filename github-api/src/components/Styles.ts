import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 50%;
  border-radius: 10px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: start;
  margin-top: 50px;
  padding: 30px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
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
    font-size: 19px;
  }
`;

export const Input = styled.input`
  max-height: 40px;
  min-height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #0e0e0e2b;
  font-size: 19px;
`;

export const Btn = styled.button`
  max-height: 40px;
  min-height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0 20px;
  background-color: #1885f2;
  color: #ffffff;

  &:hover {
    background-color: #1170cf;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;

export const ResultProfile = styled.div`
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 30px 50px;
  border-radius: 10px;
  margin-bottom: 10px;

  img {
    width: 100px;
    border-radius: 100px;
  }
  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .error {
      color: red;
    }
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .follow {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
