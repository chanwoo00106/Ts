import produce from "immer";

export const GET_DATA = "github/GET_DATA";
export const SET_DATA = "github/SET_DATA";
export const ID = "github/ID";
export const SET_ERROR = "github/SET_ERROR";

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

type TError = {
  message: string;
  code: number;
};

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

export const set_error = (error: TError) => ({
  type: SET_ERROR,
  error: error,
});

const initialState: {
  data: IData | null;
  id: string;
  error: TError;
} = {
  data: null,
  id: "",
  error: { message: "", code: 0 },
};

type ActionType = {
  type: string;
  data: IData;
  id: string;
  error: TError;
};

function github(state = initialState, action: ActionType) {
  switch (action.type) {
    case SET_DATA:
      return produce(state, (draft) => {
        if (action.data) {
          draft.data = action.data;
          draft.id = "";
        }
      });

    case ID:
      return produce(state, (draft) => {
        draft.id = action.id;
      });

    case SET_ERROR:
      return produce(state, (draft) => {
        draft.error.code = action.error.code;
        draft.error.message = action.error.message;
      });

    default:
      return state;
  }
}

export default github;
