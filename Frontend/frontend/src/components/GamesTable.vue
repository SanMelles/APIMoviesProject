<script>
export default {
    name: "GamesTable",
    props: {
        items: Array
    }
}
</script>

<template>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>GameName</th>
                <th>ReviewScore</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.GameID">
                <td>{{ item.GameID }}</td>
                <td>{{ item.GameName }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>