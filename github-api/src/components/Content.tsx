import { useSelector } from "react-redux";
import { reducerState } from "../module";
import { ResultProfile } from "./Styles";

const Content = () => {
  const { data, id, error } = useSelector(
    (state: reducerState) => state.github
  );
  return (
    <div className="over">
      {data && !error.message && (
        <ResultProfile>
          <a href={data.html_url}>
            <img src={data.avatar_url} alt="profile-img" />
          </a>
          <div className="information">
            <h2 className="nickname">
              <a href={data.html_url}>{data.name ? data.name : data.login}</a>
            </h2>
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
      {error.message && (
        <ResultProfile>
          <div className="information">
            <h1 className="error">
              {error.message} {error.code}
            </h1>
          </div>
        </ResultProfile>
      )}
    </div>
  );
};

export default Content;
