<template>
    <div class="card col-4">
        <img class="card-img-top" :src="`${img}`" alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">{{name}}</h4>
            <p class="card-text">{{text}}</p>
           <p> Время сеансов</p>
            <p class="btn btn-primary ml-1" v-for="(times,idx) in time" :key="idx">{{times}}</p>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Film",
        data() {
            return {

                name: 'Le fabuleux destin d\'Amélie Poulain',
                title: 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',
                id: '1',
                time: ['12:00','22:00','18:00','15:00','5:00'],
                img: "https://loadtv.biz/wp-content/uploads/2013/07/Friends-NBC-season-10-2004-poster.jpg"


            }
        },
        mounted() {
            axios
                .get(`https://url${this.$route.params.id}
`)
                .then((response) => {
                        if (response.status === 200) {
                            /* eslint-disable no-console */

                        }
                    }
                    /* eslint-disable no-console */
                ).catch(error => console.log(error))
        }
    }
</script>

<style scoped>

</style>