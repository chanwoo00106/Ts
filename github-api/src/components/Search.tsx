import React, { useState } from 'react';
import { Wrapper, Input, Btn, ResultProfile } from './Search.styles';
import axios from 'axios';


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

function Search() {
    const [id, setId] = useState('');
    const [data, setData] = useState<IData[]>([]);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://api.github.com/users/${id}`)
            setData([
                ...data,
                res.data
            ]);
        } catch (e) {
            alert('없는 id입니다. 다시 검색해주세요')
            console.log(e);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setId(e.target.value);

    return (
        <Wrapper>
            <img className="logo" src="./img/logo.png" alt="logo" />
            <form onSubmit={onSubmit} className="search">
                <Input value={id} onChange={onChange} placeholder="Type your github id" />
                <Btn>Submit</Btn>
            </form>

            <div className="over">
                {data && data.map(data => (
                    <ResultProfile>
                        <img src={data.avatar_url} alt="profile-img" />
                        <div className="information">
                            <h3 className="nickname">{data.name ? data.name : data.login}</h3>
                            <p className="bio">{data.bio}</p>
                            <p className="repos">repos : {data.public_repos}</p>
                        </div>
                    </ResultProfile>
                ))}
            </div>
        </Wrapper>
    )
}

export default Search;
