<template>
    <div class="card col-4">
        <img class="card-img-top" :src="`${img}`" alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">{{name}}</h4>
            <p class="card-text">{{text}}</p>
            <p class="btn btn-primary">{{time}}</p>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "Film",
        data(){
            return{
                img:'https://www.w3schools.com/bootstrap4/img_avatar6.png',
                name:'acre',
                text:'Nasdsadsadasdsa dsadsadsad dsadsadsadsa',
                time:'14:22'
            }
        },
        mounted(){
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