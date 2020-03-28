<template>
    <span>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">

  <ul class="navbar-nav ">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Главная</router-link>
    </li>
    <li class="nav-item">
      <router-link to="poster" class="nav-link">Афиша</router-link>
    </li>
    <li class="nav-item">
      <router-link to="news" class="nav-link">Новости</router-link>
    </li>
 <li class="nav-item">
 <button type="button" class="btn btn-primary" data-toggle="modal" @click="ModalView">
Вход  </button>
    </li>
</ul>
</nav>


<modal v-if="modal"></modal>

    </span>
</template>

<script>
    import Modal from './Modal'

    export default {
        name: "HeaderMain",
        components:{
            Modal
        },
        data() {
            return {
                film: '',
                modal: false
            }
        },
        methods: {
            ModalView() {
                this.modal = !this.modal
                /* eslint-disable no-console */

                console.log(this.modal)
            },

        }
    }
</script>

<style scoped>
    form {
        float: right
    }

    .modalViev {
        z-index: 1000;

        position: sticky;
        background: grey;
    }

</style>