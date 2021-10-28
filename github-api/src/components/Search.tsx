import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_data } from "../module/github";
import { Wrapper, Input, Btn } from "./Styles";
import { reducerState } from "../module";
import { get_id } from "../module/github";

function Search() {
  const dispatch = useDispatch();
  const { id } = useSelector((state: reducerState) => state.github);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(get_data(id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(get_id(e.target.value));
  };

  return (
    <Wrapper>
      <img className="logo" src="./img/logo.png" alt="logo" />
      <form onSubmit={onSubmit} className="search">
        <Input
          value={id}
          onChange={onChange}
          placeholder="Type your github id"
        />
        <Btn>Submit</Btn>
      </form>
    </Wrapper>
  );
}

export default Search;
