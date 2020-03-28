<template>
    <div class="modalViev" v-if="modal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Вход в админ панель!</h4>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <input type="text" v-model="IsLogin">
                    <button class="btn-info btn ml-2" type="reset" @click="Login">
                        Вход
                    </button>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data() {
            return {
                IsLogin: '',
                modal: true
            }
        },
        methods: {
            Login() {

                this.modal = false
                this.$router.push('/admin')

            }
        }


    }
</script>

<style scoped>
    .modalViev {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        border-radius: 10px;
        border: 1px solid black;
    }
</style>