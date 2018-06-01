// git hub token  14697593579520c929673449d3ad3f87400c2201+-

import axios from 'axios'


const API_TOKEN = '14697593579520c929673449d3ad3f87400c2201';

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