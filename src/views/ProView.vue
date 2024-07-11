<template>
    <!-- <button>2023</button> -->
    <div class="parent">
        <div class="nb-pro-container card-1">
            <p>
                <strong>1 207</strong> <br>cartes uniques utilisées
            </p>
        </div>
        <div class="nb-passage-container card-1">
            <p>
                <strong>12 650</strong><br>passages cumulés
            </p>
        </div>
        <div class="average-passage-container card-1">
            <p>
                <strong>10,5</strong><br>passage en moyenne par pro
            </p>
        </div>
        <div class="repartition-pro-chart">4</div>
        <div class="repartition-passage-flux-chart">5</div>
        <div class="tab-nb-passage-pro">
            <table>
                <tbody>
                    <tr>
                        <td colspan="4"> Distribution des passages des pro</td>
                    </tr>
                    <tr>
                        <td>Nombre de passage</td>
                        <td>inférieur à 10</td>
                        <td>entre 10 et 50</td>
                        <td>supérieur à 50</td>
                    </tr>
                    <tr>
                        <td>Nombre de pro concerné</td>
                        <td>878</td>
                        <td>293</td>
                        <td>36</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 400px 250px;

    grid-column-gap: 50px;
    grid-row-gap: 25px;
    width: 90%;

    >div {
        border-radius: 20px;
    }
}

.card-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 10px 5px 5px rgb(160, 159, 159);
}

.nb-pro-container {
    grid-area: 1 / 1 / 2 / 2;
}

.nb-passage-container {
    grid-area: 1 / 2 / 2 / 3;
}

.average-passage-container {
    grid-area: 1 / 3 / 2 / 4;
}

.repartition-pro-chart {
    grid-area: 2 / 1 / 3 / 4;
    background-color: white;
    box-shadow: 10px 5px 5px rgb(160, 159, 159);
}

.repartition-passage-flux-chart {
    grid-area: 3 / 1 / 4 / 2;
    background-color: white;
    box-shadow: 10px 5px 5px rgb(160, 159, 159);
}

.tab-nb-passage-pro {
    grid-area: 3 / 2 / 4 / 4;
    background-color: white;
    box-shadow: 10px 5px 5px rgb(160, 159, 159);
}

table {
	border: 0px solid #595959;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
}

td {
	border: 1px solid #595959;
	border-collapse: collapse;
}
    th {
	border: 1px solid #595959;
	border-collapse: collapse;
}
td, th {
	padding: 3px;
	width: 30px;
	height: 25px;
}

</style>