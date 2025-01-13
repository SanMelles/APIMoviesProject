<script>
export default {
    name: ["GameForm"],
    props: ['GameID', 'GameName', 'ReleaseDateEU', 'ReviewScore'],
    emits: ['update:GameName', 'update:ReleaseDateEU', 'update:ReviewScore']
}
</script>
<template>
    <table class="table table-striped">
        <tr>
            <th>ID</th>
            <td>{{GameID}}</td>
        </tr>
        <tr>
            <th>Game name</th>
            <td><input :value="GameName" @input="$emit('update:GameName',$event.target.value)"></td>
        </tr>
        <tr>
            <th>European release date</th>
            <td><input :value="ReleaseDateEU" @input="$emit('update:ReleaseDateEU',$event.target.value)"></td>
        </tr>
        <tr>
            <th>Score of review at the time</th>
            <td>><input :value="ReviewScore" @input="$emit('update:ReviewScore',$event.target.value)"></td>
        </tr>
    </table>
</template>