<script>
export default {
    name: "MoviesTable",
    props: {
        items: Array
    }
}
</script>

<template>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>Movie</th>
                <th>Year</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.MovieID">
                <td>{{ item.MovieName }}</td>
                <td>{{ item.ReleaseYear }}</td>
                <td>{{ item.Genre }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>