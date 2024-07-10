<template>
    <div class="dct-container">
        <h1>Les déchetteries continentales</h1>

        <div class="container-grille">
            <div>Belz</div>
            <div>Carnac</div>
            <div>Crach</div>
            <div>Quiberon</div>
            <div>Pluvigner</div>
            <div>Saint-Anne</div>
        </div>
    </div>

    <!-- <RouterView /> -->

</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.dct-container {
    display: flex;
    flex-direction: column;
    
    >.container-grille {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
}

</style>
