// git hub token  23634fcf7f862c6ecbbf9441ea40932d8f1176c7+-

import axios from 'axios'


const API_TOKEN = '23634fcf7f862c6ecbbf9441ea40932d8f1176c7';

export default class  GitHubServices {

    constructor(){

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + API_TOKEN

        axios.get('https://api.github.com/rate_limit')
            .then((response)=>{

                console.log(response)
            })

    }


getRepo(username){

    console.log(username)

    return axios.get(`https://api.github.com/users/${username}/repos`)

}


}

export const githubServices = new GitHubServices()