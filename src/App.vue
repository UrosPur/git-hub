<template>
    <v-ons-page>

        <app-toolbar></app-toolbar>

        <div class="content">
            <app-search :query.sync="query"></app-search>
            <v-ons-button modifier="cta" style="margin: 6px 0">view profile</v-ons-button>

            <!--<v-ons-progress-bar :value="progress"></v-ons-progress-bar>-->

            <!--<section style="margin: 16px">-->
            <!--<p>-->
            <!--Progress: {{ progress }}%-->
            <!--</p>-->

            <!--<p>-->
            <!--<v-ons-progress-bar value="20"></v-ons-progress-bar>-->
            <!--</p>-->

            <!--<p>-->
            <!--<v-ons-progress-bar value="40" secondary-value="80"></v-ons-progress-bar>-->
            <!--</p>-->

            <!--<p>-->
            <!--<v-ons-progress-bar indeterminate></v-ons-progress-bar>-->
            <!--</p>-->

            <!--<p>-->
            <!--<v-ons-progress-circular value="20"></v-ons-progress-circular>-->
            <!--<v-ons-progress-circular value="40" secondary-value="80"></v-ons-progress-circular>-->
            <!--<v-ons-progress-circular indeterminate></v-ons-progress-circular>-->
            <!--</p>-->
            <!--</section>-->

            <template v-if="test && repos.length"

            >
                <v-ons-list>
                    <v-ons-list-header>Repositories of {{ query }}</v-ons-list-header>
                    <v-ons-list-item v-for="repo in repos"
                                     :key="repos.id"
                                     :repo="repo">

                        {{ repo.name }} {{ repo.description }}

                    </v-ons-list-item>
                </v-ons-list>

            </template>

            <template v-if="!test">
                <empty-state :devel="query"/>
            </template>
            <template v-if="testik">
                <no-user/>
            </template>


        </div>

    </v-ons-page>
</template>
<script>

    import AppToolbar from './components/AppToolbar'
    import AppSearch from './components/AppSearch'
    import {githubServices} from "./services/GitHub";
    import debounce from 'lodash/debounce'
    import EmptyState from './components/EmptyState'
    import NoUser from './components/NoUser'

    export default {
        components: {
            AppToolbar,
            AppSearch,
            EmptyState,
            NoUser,
        },

        watch: {

            query: function (query) {

                this.getRepo()

                // debounce(githubServices.getRepo(query), 500)

                this.query = query

                // console.log(query)
            }

        },

        data() {
            return {
                title: 'My app',
                query: "",
                repos: [],
                test: false,
                testik: false,
                progress: 0,
                intervalID: 0

            };
        },
        methods: {

            getRepo: debounce(function () {
                // console.log('query', this.query.length)

                githubServices.getRepo(this.query)
                    .then((response) => {

                        console.log('tesst', response.data)

                        this.repos = response.data

                        // console.log(response.data.length > 0)

                        if (response.data.length > 0) {

                            this.test = true

                        } else {
                            this.test = false
                        }

                    })
                    .catch((error) => {


                        this.test = true
                        this.testik = true
                        this.repos = []


                    })


            }, 500)


        },
        mounted() {

            //     this.intervalID = setInterval(() => {
            //         if (this.progress === 100) {
            //             clearInterval(this.intervalID);
            //             return;
            //         }
            //
            //         this.progress++;
            //     }, 40);
        }
    };
</script>
