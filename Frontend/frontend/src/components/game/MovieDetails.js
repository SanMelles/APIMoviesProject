export default {
    template: `
    <table class="table table-striped">

        <tr>
            <th>ID</th>
            <td>{{movieInModal.MovieID}}</td>
        </tr>

        <tr>
            <th>Movie name</th>
            <td>{{movieInModal.MovieName}}</td>
        </tr>

        <tr>
            <th>Release year</th>
            <td>{{movieInModal.ReleaseYear}}</td>
        </tr>

        <tr>
            <th>Genre</th>
            <td>{{genreInModal.Genre}}</td>
        </tr>

        <tr>
            <th>Duration hours</th>
            <td>{{durationHoursInModal.DurationHours}}</td>
        </tr>

        <tr>
            <th>Duration minutes</th>
            <td>{{durationMinutesInModal.DurationMinutes}}</td>
        </tr>


    </table>
    `,
    props: ['movieInModal'],
    
}