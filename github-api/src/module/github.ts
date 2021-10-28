import produce from "immer";

export const GET_DATA = "github/GET_DATA";
export const SET_DATA = "github/SET_DATA";
export const ID = "github/ID";

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

export const get_id = (id: string) => ({
  type: ID,
  id,
});

const initialState: { data: IData; id: string; isData: boolean } = {
  data: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: "",
    company: "",
    blog: "",
    location: "",
    email: null,
    hireable: null,
    bio: "",
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: "",
  },
  id: "",
  isData: false,
};

type ActionType = {
  type: string;
  data?: IData;
  id?: string;
};

function github(state = initialState, action: ActionType) {
  switch (action.type) {
    case SET_DATA:
      return produce(state, (draft) => {
        if (action.data) {
          draft.data = action.data;
          draft.id = "";
          draft.isData = true;
        }
      });

    case ID:
      return produce(state, (draft) => {
        if (action.id) draft.id = action.id;
      });

    default:
      return state;
  }
}

export default github;
