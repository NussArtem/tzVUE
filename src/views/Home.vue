<template>
    <div>


        <p class="title">List FILMS
        </p>
        <span class="d-flex justify-content-around row p-0 m-0">

            <div class=" col-12 col-md-3 " v-for="(film,idx) in films" :key="idx">
                <div class="card-body ">
                    <h4 class="card-title">{{film.name}}</h4>
                    <p class="card-text">{{film.title}}</p>
                    <router-link :to="`film/${film.id}`" class="btn btn-primary">Посмотреть</router-link>
                </div>
                <img :src="`${film.img}`" class="img-fluid card-img-bottom">
            </div>
        </span>


        <p class="title">About
        </p>
        <div class="d-flex justify-content-around ">
            <span class="col-8"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium atque autem deserunt, dolorum eaque error harum itaque iure nam nemo placeat quia ratione saepe ullam veritatis voluptas voluptatem.</span><span>Asperiores aspernatur consequuntur earum eos explicabo magni numquam odio repellendus sed tenetur. Ad assumenda commodi, culpa cum deserunt excepturi fugiat illo impedit iste minus modi neque obcaecati perspiciatis totam voluptas?  laudantium minima nam nulla odit quidem quis quod quos,Aspernatur consectetur
                ratione repudiandae saepe similique veritatis nihil quas sunt vel velit voluptate! A cupiditate
                debitis dicta eaque perferendis. Eius itaque nostrum quis rerum unde? Eveniet facilis illum tempore.</span><span>
                Blanditiis consequuntur
                soluta! Aut quo recusandae voluptates!</span><span>Ad, aut corporis dolor dolorem doloribus ex excepturi
                exercitationem expedita facere impedit magnam natus nisi officiis qui quia reiciendis rem saepe sit
                sunt tenetur unde velit vero voluptate. Amet, animi.</span><span>Amet atque, cum cumque distinctio dolore
                ea eaque eveniet excepturi explicabo facere fugit incidunt ipsum iste itaque minus porro praesentium provident

                    veritatis. At deleniti doloremque
                maiores molestiae optio quidem quod, voluptatibus. Adipisci explicabo, labore.
                A autem consectetur cum dignissimos ducimus exercitationem expedita nam saepe unde voluptate.
                Earum eos illo tempore?</span><span>Ab adipisci, aliquam autem, commodi error et exercitationem
                id iure natus quasi rem sequi vel. Blanditiis cum distinctio doloremque enim eos error ex fugit
                maxime, natus, nihil omnis perspiciatis suscipit!</span></span>
            <span class="col-3"> <img src="https://www.w3schools.com/bootstrap4/img_avatar6.png" alt=""
                                      class="img-fluid"></span>
        </div>
        <p class="title">News
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
    import axios from 'axios'

    export default {
        name: "Main",
        data() {
            return {
                films: [
                    {
                        name: 'ACE',
                        title: 'Some Text',
                        id: '1',
                        img: "https://www.w3schools.com/bootstrap4/img_avatar6.png"
                    }, {
                        name: 'ULTRA',
                        title: 'Some Text 2',
                        id: '2',
                        img: "https://www.w3schools.com/bootstrap4/img_avatar5.png"
                    }, {
                        name: 'ONE',
                        title: 'Some Text 3',
                        id: '3',
                        img: "https://www.w3schools.com/bootstrap4/img_avatar4.png"
                    }

                ],
                list: [
                    {
                        title: 'News 1',
                        text: 'qwewqewqewqewqe',
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
        },
        mounted() {
            axios
                .get(`https://list-film
`)
                .then((response) => {
                        if (response.status === 200) {
                            /* eslint-disable no-console */

                        }
                    }
                    /* eslint-disable no-console */
                ).catch(error => console.log(error))

            axios
                .get(`https://list-news
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
    .title {
        text-align: center;
        font-size: 36px;
        color: grey;
        margin-top: 10px;
    }
</style>