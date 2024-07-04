<template>
    <div class="search-container">
        <i class="pi pi-search"></i>
        <input type="search" placeholder="Rechercher...">
    </div>
</template>

<script setup>

</script>

<style scoped>
.search-container {
    position: relative;
    display: inline-block;

    >i {
        font-size: 1.5rem;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
    }

    >input[type="search"] {
        width: 200px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 9999px;
    }

    >input[type=search]:focus {
        border: 3px solid var(--rose);
    }
}
</style>