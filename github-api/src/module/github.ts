export const GET_DATA = "github/GET_DATA";
export const SET_DATA = "github/SET_DATA";

export interface IData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const set_data = (data: IData) => ({
  type: SET_DATA,
  data,
});

export const get_data = (id: string) => ({
  type: GET_DATA,
  id,
});

let initialState: IData;

type ActionType = {
  type: string;
  data?: IData;
};

function github(state = initialState, action: ActionType) {
  switch (action.type) {
    case SET_DATA:
      if (action.data) return action.data;
      break;

    default:
      return state;
  }
}

export default github;
