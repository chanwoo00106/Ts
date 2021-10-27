import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../module";
import { get_data } from "../module/github";
import { Wrapper, Input, Btn, ResultProfile } from "./Search.styles";

function Search() {
  const dispatch = useDispatch();
  const data = useSelector((state: reducerState) => state.github);
  const [id, setId] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(get_data(id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);

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

      <div className="over">
        {data && (
          <ResultProfile>
            <a href={data.html_url}>
              <img src={data.avatar_url} alt="profile-img" />
            </a>
            <div className="information">
              <h3 className="nickname">
                <a href={data.html_url}>{data.name ? data.name : data.login}</a>
              </h3>
              <p className="bio">
                <a href={data.html_url}>{data.bio}</a>
              </p>
              <p className="repos">
                <a href={`https://github.com/${id}?tab=repositories`}>
                  repos : {data.public_repos}
                </a>
              </p>
              <div className="follow">
                <p>
                  <a href={`https://github.com/${id}?tab=followers`}>
                    followers : {data.followers}
                  </a>
                </p>
                <p>
                  <a href={`https://github.com/${id}?tab=following`}>
                    following : {data.following}
                  </a>
                </p>
              </div>
            </div>
          </ResultProfile>
        )}
      </div>
    </Wrapper>
  );
}

export default Search;
