<template>
    <v-ons-navigator swipeable
                     :page-stack="pageStack"
                     @push-page="pushPage"
    >
    </v-ons-navigator>
</template>
<script>

import HomePage from './HomePage'

    export default {
        components: {
            HomePage,
        },

        data(){

            return {

                pageStack:[HomePage]

            }

        },
        methods: {

            pushPage(event) {
                // console.log(event)
                this.pageStack.push(event)
            }
        },
    };
</script>
