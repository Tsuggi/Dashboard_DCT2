<template>
    <div class="sub-container">
        <UserBloc />
        <PathBloc />
    </div>
</template>

<script setup>
import UserBloc from '@/components/sub_top_bar/components/UserBloc.vue'
import PathBloc from '@/components/sub_top_bar/components/PathBloc.vue'
</script>

<style scoped>
.sub-container {
    height: 2.5rem;
    display: flex;
    background-color: white;
}

</style>