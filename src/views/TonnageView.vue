<template>
    <div class="tonnage-container">
        <h1>Tonnage</h1>
        <TonnageChart :dataTonnage="grosFlux"/>
        <TonnageChart :dataTonnage="moyenFlux"/>
        <TonnageChart :dataTonnage="petitFlux"/>
    </div>
</template>

<script setup>
import TonnageChart from "@/components/charts/TonnageChart.vue";
import { petitFlux, moyenFlux, grosFlux } from '@/data/tonnage2023';
</script>

<style scoped>
.tonnage-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}
</style>

