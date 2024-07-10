<template>
    <div class="bloc-path">
        {{ route.name }}
        <i class="pi pi-chevron-right"></i>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.bloc-path {
    width: 100%;
    border: 0.5px solid var(--bleu-pastel);
    border-left-width: 0px;
    color: grey;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 0.5rem;
}
</style>

