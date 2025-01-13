<script>
export default {
    name: "UsersTable",
    props: {
        items: Array
    }
}
</script>

<template>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>User id</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.ID">
                <td>{{ item.ID }}</td>
                <td>{{ item.Username }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>