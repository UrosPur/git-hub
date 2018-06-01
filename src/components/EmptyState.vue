<template>


        <v-ons-card>
            <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" alt="Onsen UI" height="200px" width="200px">
            <div class="title">
                Awesome framework
            </div>
            <div class="content">
                There are no {{ getMultiple() }} here
            </div>
        </v-ons-card>

</template>

<script>

    import pluralize from 'pluralize'

    export default {
        name: "EmptyState",

        props:{


            devel:{

                type: String,

            }


        },

        methods:{

            getMultiple(){

                // console.log('dasdssadas',pluralize(this.devel))
                return pluralize(this.devel)
            }
        }
    }
</script>

<style scoped>

</style>