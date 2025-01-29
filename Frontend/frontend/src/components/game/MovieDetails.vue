<!-- MovieDetails.js refaktoreeritud vue kujule -->
<!-- refaktoreerige teised .js komponendid ümber .vue kujule selle eeskujul -->
<!-- nimelt, template tuleb eraldi välja html elemendiks, aga kõik muu, läheb skripti sisse -->


<script>
export default {
    name: ["MovieDetails"],
    props: ['movieInModal'],    
}
</script>

<template>
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
            <th>Duration hours</th>
            <td>{{movieInModal.DurationHours}}</td>
        </tr>

        <tr>
            <th>Duration minutes</th>
            <td>{{movieInModal.DurationMinutes}}</td>
        </tr>

    </table>
</template>