

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

    export default {
        components: {
            AppToolbar,
            AppSearch,
        },

        data() {
            return {
                title: 'My app',
                query:"",

            };
        },
        methods: {
            alert() {
                this.$ons.notification.alert('This is an Onsen UI alert notification test.');
            }
        }
    };
</script>
