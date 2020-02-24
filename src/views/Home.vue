<template>
    <div class=" container-fluid d-flex justify-content-around">
        <span class="line">
            <div class="filter ml-4">
            <span v-for="(filters,idx) in $store.getters.getInfo" :key="idx">
                <span class="pr-4">
<label class="container ">
  <input type="checkbox" :value="`${filters.strCategory}`" v-model="checkedDrinks" >
  <span class="checkmark"></span>
</label></span>{{filters.strCategory}}</span>
                <button @click="List">APPLY</button>


            </div>
        </span>
        <div>
            <div class="head mt-4 ml-4">{{head}}
                <div class="ic mt-2"></div>
            </div>

            <span class="row mt-3">

        <div v-for="(all,idx) in $store.getters.getCocktail" :key="idx" class="col-2 mt-4 ml-4">

      <span>

          <img :src="`${all.strDrinkThumb}`" alt="">
         <p>{{all.strDrink}}</p>
      </span>
        </div>


    </span>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'


    export default {
        name: "Home",
        data() {
            return {
                checkedDrinks: [],
                head: 'Beer'
            }

        },
        mounted() {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
                )
                .then((response) => {
                        if (response.status === 200) {

                            this.$store.commit('set', {
                                type: "info",
                                items: response.data.drinks
                            });


                        }
                    }
                    /* eslint-disable no-console */
                ).catch(error => console.log(error))

            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`
                )
                .then((response) => {
                        if (response.status === 200) {

                            this.$store.commit('set', {
                                type: "cocktail",
                                items: response.data.drinks
                            });


                        }
                    }
                    /* eslint-disable no-console */
                ).catch(error => console.log(error))

        },
        methods: {
            List() {
                let i = [];
                for (i in this.checkedDrinks) {

                    this.head = this.checkedDrinks[i]
                    /* eslint-disable no-console */
                    console.log(i)

                    axios
                        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.checkedDrinks[i]}`
                        )
                        .then((response) => {
                                if (response.status === 200) {
                                    /* eslint-disable no-console */
                                    console.log(response.data.drinks)
                                    this.$store.commit('set', {
                                        type: "cocktail",
                                        items: response.data.drinks
                                    });


                                }
                            }
                            /* eslint-disable no-console */
                        ).catch(error => console.log(error))}


            }


        }

    }
</script>

<style scoped>
    .filter {
        width: 249px;
    @font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */
        margin-top: 21px;

        color: #818181;
    }

    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 18px;
        background-color: white;
        border: 1px solid #818181;
        border-radius: 4px;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: white;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: white;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 4px;
        top: 3px;
        width: 8px;
        height: 10px;
        border: solid #818181;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .line {
        border-right: 1px solid #D0D0D0;
        width: 248px;
        height: 100vh;
        position: static
    }

    .head {
    @font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #818181;

    }

    .ic {
        border: 1px solid #D0D0D0;
        width: 92%;
    }

    img {
        max-width: 150px;
        max-height: 150px;
    }

    button {
        margin-top: 40px;
        width: 180px;
        height: 39px;
        border: none;
        @font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #FFFFFF;


        background: #4E4E4E;
        border-radius: 10px;
    }
</style>