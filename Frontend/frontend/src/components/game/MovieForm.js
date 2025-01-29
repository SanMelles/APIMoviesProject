export default {
    template: `
    <table class="table table-striped">

        <tr>
            <th>ID</th>
            <td>{{MovieID}}</td>
        </tr>

        <tr>
            <th>Movie name</th>
            <td><input :value="MovieName" @input="$emit('update:MovieName',$event.target.value)"></td>
        </tr>

        <tr>
            <th>Release Year</th>
            <td><input :value="ReleaseYear" @input="$emit('update:ReleaseYear',$event.target.value)"></td>
        </tr>

        <tr>
            <th>Genre of the movie</th>
            <td>><input :value="Genre" @input="$emit('update:Genre',$event.target.value)"></td>
        </tr>
        <tr>
            <th>Duration Hours</th>
            <td><input :value="DurationHours" @input="$emit('update:DurationHours',$event.target.value)"></td>
        </tr>

        <tr>
            <th>Duration Minutes</th>
            <td>><input :value="DurationHours" @input="$emit('update:DurationHours',$event.target.value)"></td>
        </tr>
    </table>
    `,
    props: ['MovieID', 'MovieName', 'ReleaseYear', 'Genre', 'DurationHours', 'DurationMinutes'],
    emits: ['update:GameName', 'update:ReleaseYear', 'update:Genre', 'update:DurationHours', 'update:DurationMinutes']
}