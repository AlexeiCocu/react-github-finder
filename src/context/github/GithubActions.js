import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const githubAxios = axios.create({
    baseURL:GITHUB_URL
})

// GEt search results
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    })

    const response = await githubAxios.get(`/search/users?${params}`)
    return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        githubAxios.get(`/users/${login}`),
        githubAxios.get(`/users/${login}/repos`)
    ])

    return {user: user.data, repos: repos.data}

}