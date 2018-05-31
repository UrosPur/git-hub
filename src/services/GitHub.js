// git hub token  f6b0e205b5d7ca8df8b95d91e472f92d4f3b4255

import axios from 'axios'


const API_TOKEN = 'f6b0e205b5d7ca8df8b95d91e472f92d4f3b4255';

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