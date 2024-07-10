<template>
    <div class="side-container">
        <ul>
            <RouterLink :to="item.to" v-for="(item, index) in menu" :key="index" exact-active-class="exact-active-link">
                <li>
                    <i :class="item.icon"></i>
                    {{ item.label }}
                    <i :class="item.posticon"></i>
                    <h1 v-if="item.children">TEST</h1>
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
        to: "/dechetterie/belz"
    },
    {
        label: "Déchetteries",
        icon: "pi pi-trash",
        posticon: "pi pi-angle-right",
        to: "/dechetterie",
        children: [
            { label: 'Belz' },
            { label: 'Carnac' },
            { label: 'Pluvigner' },
            { label: 'Saint-Anne' },
            { label: 'Quiberon' },
            { label: 'Crach' },
        ]
    },
])

</script>

<style scoped>
.side-container {
    min-width: 270px;
    height: 100vh;
    border: 0.5px solid var(--bleu-pastel);
    border-top-width: 0px;
    padding-top: 2rem;

    >ul {
        list-style: none;
        padding-left: 2rem;
        width: 100%;

        >a {
            text-decoration: none;
            color: black;

            >li {
                width: 100%;
                padding: 0.5rem;
            }

            >li:hover {
                width: 100%;
                background-color: var(--rose);
                border-top-left-radius: 9999px;
                border-bottom-left-radius: 9999px;
                border: 0.5px solid var(--bleu-pastel);
            }
        }
    }
}

.exact-active-link {
    font-weight: bold;
}
</style>