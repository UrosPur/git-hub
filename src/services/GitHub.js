// git hub token  9cf321b85d768e3ed2caa1f0f92d9e5a80ec79fe

import axios from 'axios'


const API_TOKEN = '9cf321b85d768e3ed2caa1f0f92d9e5a80ec79fe';

export default class  GitHubServices {

    constructor(){

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + API_TOKEN

    }


getRepo(username){

    console.log(username)

    axios.get(`https://api.github.com/users/${username}/repos`)

}


}

export const githubServices = new GitHubServices()