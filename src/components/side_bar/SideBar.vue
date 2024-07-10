<template>
    <div class="side-container">
        <ul>
            <RouterLink :to="item.to" v-for="(item, index) in menu" :key="index" exact-active-class="active-link">
                <li @click="openSubMenu(item)">
                    <i :class="item.icon"></i>
                    {{ item.label }}
                    <i :class="item.posticon"></i>
                </li>

                <ul v-if="isOpen">
                    <RouterLink :to="dct.to" v-for="(dct, i) in item.children" :key="i" exact-active-class="active-link">
                        <li><em>{{ dct.label }}</em></li>
                    </RouterLink>
                </ul>

            </RouterLink>
        </ul>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router';

let isOpen = ref(false)
const openSubMenu = (item)=>{
    if (item.children) {
        isOpen.value = !isOpen.value
    }
    else {
        isOpen.value = false
    }
}

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
            { label: 'Belz', to: "/dechetterie/belz" },
            { label: 'Carnac', to: '/dechetterie/carnac' },
            { label: 'Pluvigner', to: '/dechetterie/pluvigner' },
            { label: 'Saint-Anne', to: '/dechetterie/saintanne' },
            { label: 'Quiberon', to: '/dechetterie/quiberon' },
            { label: 'Crach', to: '/dechetterie/crach' },
        ]
    },
    {
        label: "about",
        icon: "pi pi-chevron-circle-left",
        to: "/about"
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

            >li {
                width: 100%;
                padding: 0.5rem;
            }

            ul {
                padding-left: 3.5rem;
                font-size: small;
                list-style: none;
            }
        }
    }
}

a {
    text-decoration: none;
    color: black;
}

li:hover {
                width: 100%;
                background-color: var(--rose);
                border-top-left-radius: 9999px;
                border-bottom-left-radius: 9999px;
                border: 0.5px solid var(--bleu-pastel);
                padding-left: 0.5rem;
            }

.active-link {
    font-weight: bold;
}
</style>