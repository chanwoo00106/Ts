import React from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../module";
import { ResultProfile } from "./Styles";

const Content = () => {
  const { data, isData, id } = useSelector((state: reducerState) => {
    console.log(state);
    return state.github;
  });
  console.log(data);
  return (
    <div className="over">
      {isData ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Content;
