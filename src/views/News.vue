<template>
    <div>
        <p class="title">Новости
        </p>
        <span v-for="(news,idx) in list" :key="idx" class="card bg-light">
                        <div class="card-body text-center">

            <h3 class="card-text">{{news.title}} <span class="badge badge-secondary">{{news.id}}</span></h3>
            <p class="card-text">
                {{news.text}}
            </p>
                        </div>
        </span>

    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return{
                list: [
                    {
                        title: 'News 1',
                        text: ' Some Text',
                        id: '1'
                    },
                    {
                        title: 'News 2',
                        text: 'qwewqewqewqewqe',
                        id: '2'
                    },
                    {
                        title: 'News 3',
                        text: 'qwewqewqewqewqe',
                        id: '3'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        font-size: 36px;
        color: grey;
        margin-top: 10px;
    }
</style>