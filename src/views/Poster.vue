<template>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Cost</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(film,idx) in data" :key="idx">
            <td>
                <router-link :to="`film/${film.id}`">{{film.name}}</router-link>
            </td>
            <td>{{film.time}}</td>
            <td>{{film.cost}}</td>
        </tr>

        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Poster",
        data() {

            return {
                data: [
                    {
                        name: 'Le fabuleux destin d\'Amélie Poulain',
                        time: '12:00',
                        cost: '14$'
                    }, {
                        name: 'How I Met Your Mother', time: '2:00',
                        cost: '44$'
                    }, {
                        name: 'Friends',
                        time: '13:00',
                        cost: '22$'
                    }
                ]
            }

        }
    }
</script>

<style scoped>

</style>