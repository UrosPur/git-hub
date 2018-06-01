// git hub token  89f728c8be18b5723b9f88dc404596a06743c3ae+-

import axios from 'axios'


const API_TOKEN = '89f728c8be18b5723b9f88dc404596a06743c3ae';

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