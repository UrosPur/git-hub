// git hub token  d51036cf6e2ea3b0fa28bcfbb667a3cc5adcddb7

import axios from 'axios'


export default class  GitHubServices {


getRepo(username){

    axios.get(`https://api.github.com/users/${username}/repos`)

}


}

export const githubServices = new GitHubServices()