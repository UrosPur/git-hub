

<template>
    <v-ons-page>

        <app-toolbar></app-toolbar>

        <div class="content">
            <app-search :query.sync="query"  ></app-search>
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

            };
        },
        methods: {

            getRepo:debounce(function(){
                // console.log(this.query)
            githubServices.getRepo(this.query)
                .then((response)=>{

                    this.repos = response.data
                })

    },500)




        }
    };
</script>
