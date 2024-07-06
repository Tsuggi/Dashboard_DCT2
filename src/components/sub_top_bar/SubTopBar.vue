<template>
    <div class="container">
        <UserBloc />
        <PathBloc />
    </div>
</template>

<script setup>
import UserBloc from '@/components/sub_top_bar/components/UserBloc.vue'
import PathBloc from '@/components/sub_top_bar/components/PathBloc.vue'
</script>

<style scoped>
.container {
    height: 2.5rem;
    display: flex;
}

</style>