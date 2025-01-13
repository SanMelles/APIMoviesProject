<!-- GameDetails.js refaktoreeritud vue kujule -->
<!-- refaktoreerige teised .js komponendid ümber .vue kujule selle eeskujul -->
<!-- nimelt, template tuleb eraldi välja html elemendiks, aga kõik muu, läheb skripti sisse -->


<script>
export default {
    name: ["GameDetails"],
    props: ['gameInModal'],    
}
</script>

<template>
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
</template>