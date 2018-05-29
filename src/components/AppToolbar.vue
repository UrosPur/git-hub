<template>
    <v-ons-toolbar>

    <div class="left">Action Sheet</div>
    <div class="center">{{ title }}</div>
    <div class="right">Action Sheet</div>


    </v-ons-toolbar>

</template>

<script>
    export default {
        name: "AppToolbar",

        props:{
            title: {

                type:String,

            }

        }
    }
</script>

<style scoped>

</style>