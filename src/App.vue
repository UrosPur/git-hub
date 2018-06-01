

<template>
    <v-ons-page>

        <app-toolbar></app-toolbar>

        <div class="content">
            <app-search :query.sync="query"  ></app-search>

            <!--<v-ons-progress-circular v-if="query" indeterminate>-->

        <v-ons-list v-if="test">
            <v-ons-list-header>Repositories of {{ query }}</v-ons-list-header>
            <v-ons-list-item  v-for="repo in repos"
                              :key="repos.id"
                              :repo="repo" >


                {{ repo.name }}   {{ repo.description }}


            </v-ons-list-item>
        </v-ons-list>
        </div>

    </v-ons-page>
</template>
<script>

    import AppToolbar from './components/AppToolbar'
    import AppSearch from './components/AppSearch'
    import {githubServices} from "./services/GitHub";
    import debounce from 'lodash/debounce'

    export default {
        components: {
            AppToolbar,
            AppSearch,
        },

        watch: {

            query: function(query) {

                this.getRepo()

                // debounce(githubServices.getRepo(query), 500)

                this.query = query

                console.log(query)
            }

        },

        data() {
            return {
                title: 'My app',
                query:"",
                repos:'',
                test: false

            };
        },
        methods: {

            getRepo:debounce(function(){
                // console.log(this.query)
            githubServices.getRepo(this.query)
                .then((response)=>{

                    console.log('tesst',response.data)
                    this.repos = response.data

                   if(response.data.lenght){
                        this.test = true
                   }

                })

    },500)




        }
    };
</script>
