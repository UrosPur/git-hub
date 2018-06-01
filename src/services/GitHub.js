// git hub token  de163d3763f30f4f1847d6f2e0d4c1d3e0d998e0+-

import axios from 'axios'


const API_TOKEN = 'de163d3763f30f4f1847d6f2e0d4c1d3e0d998e0';

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