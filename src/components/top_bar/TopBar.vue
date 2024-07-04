<template>
    <header>
        <div class="left-container">
            <LogoAqta />
            <BurgerIcon class="make-it-bigger"/>
        </div>
        <div class="right-container">
            <SearchInput />
            <NotificationIcon class="make-it-bigger"/>
            <MessageIcon class="make-it-bigger"/>
            <ParametersIcon class="make-it-bigger"/>
        </div>
    </header>
</template>

<script setup>
import LogoAqta from '@/components/top_bar/components/LogoAqta.vue'
import NotificationIcon from '@/components/top_bar/components/NotificationIcon.vue'
import BurgerIcon from '@/components/top_bar/components/BurgerIcon.vue'
import ParametersIcon from '@/components/top_bar/components/ParametersIcon.vue'
import MessageIcon from '@/components/top_bar/components/MessageIcon.vue'
import SearchInput from '@/components/top_bar/components/SearchInput.vue'
</script>

<style scoped>
header {
    width: 100vw;
    height: 4rem;
    background-color: var(--bleu-pastel);

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > .left-container {
        display: flex;
        gap: 2rem;
        align-items: center;    
        margin-left: 1rem;
    }
    > .right-container {
        display: flex;
        align-items: center;  
        gap: 2rem;
        margin-right: 3rem;
        color: white;
    }
}

.make-it-bigger:hover {
    scale: 1.1;
    cursor: pointer;
}
</style>