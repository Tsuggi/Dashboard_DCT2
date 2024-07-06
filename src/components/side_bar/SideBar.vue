<template>
    <div class="container">
        <ul>
            <RouterLink :to="item.to" v-for="(item, index) in menu" :key="index">
                <li>
                    <i :class="item.icon"></i>
                    {{ item.label }}                
                    <i :class="item.posticon"></i>
                </li>
            </RouterLink>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const menu = reactive([
    {
        label: "Dashboard",
        icon: "pi pi-desktop",
        to: "/dashboard"
    },
    {
        label: "Tonnage",
        icon: "pi pi-chart-bar",
        to: "/tonnage"
    },
    {
        label: "Tâches",
        icon: "pi pi-hammer",
        to: "/taches"
    },
    {
        label: "En attente",
        icon: "pi pi-chevron-circle-left",
        to: "/waiting"
    },
    {
        label: "Déchetteries",
        icon: "pi pi-trash",
        posticon: "pi pi-angle-right",
        to: "/waiting",
        children: [
            { name: 'Belz' },
            { name: 'Carnac' },
            { name: 'Pluvigner' },
            { name: 'Saint-Anne' },
            { name: 'Quiberon' },
            { name: 'Crach' },
        ]

    },
])

</script>

<style scoped>
.container {
    min-width: 270px;
    height: 100vh;
    border: 0.5px solid var(--bleu-pastel);
    border-top-width: 0px;
}

a {
    text-decoration: none;
    color: black;
}
</style>