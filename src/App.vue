<template>
    <v-ons-navigator swipeable
                     :page-stack="pageStack"
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
    };
</script>
