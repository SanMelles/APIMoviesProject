export default {
    template: `
    <table class="table table-striped">

        <tr>
            <th>ID</th>
            <td>{{gameInModal.GameID}}</td>
        </tr>

        <tr>
            <th>Game name</th>
            <td>{{gameInModal.GameName}}</td>
        </tr>

        <tr>
            <th>European release date</th>
            <td>{{gameInModal.ReleaseDateEU}}</td>
        </tr>

        <tr>
            <th>Score of review at the time</th>
            <td>{{gameInModal.ReviewScore}}</td>
        </tr>

    </table>
    `,
    props: ['gameInModal'],
    
}