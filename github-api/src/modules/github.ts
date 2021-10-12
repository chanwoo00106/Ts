const TOGGLE = 'github/TOGGLE';
const GET_DATA = 'github/DATA_GET';

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

export const toggle = () => ({ type: TOGGLE });
export const get_data = (data: IData) => ({ type: GET_DATA, data });

type ActionType =
    | ReturnType<typeof toggle>
    | ReturnType<typeof get_data>;

function github(state: IData, action: ActionType) {
    switch (action.type) {
        case TOGGLE:

    }
}