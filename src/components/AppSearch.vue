<template>

    <p>


        <v-ons-search-input
                :placeholder="placeholder"
                style="width: 100%;"
                :value="query"
                @input="$emit('update:query', $event.target.value)"
        >
        </v-ons-search-input>

    </p>
    
</template>

<script>
    export default {
        name: "AppSearch",

        props:{

            query:{

                type: String,
            },

            placeholder:{

                type: String,

            }


        }
    }
</script>

<style scoped>

</style>