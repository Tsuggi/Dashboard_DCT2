<script setup>
import TopBar from "@/components/top_bar/TopBar.vue";
import SideBar from "@/components/side_bar/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopBar />
  
  <div class="main-container">
      <SideBar />
      <div class="view-container">
        <RouterView />
      </div>
  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
  
}

.view-container {
  background-color: var(--backcolor);
  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>