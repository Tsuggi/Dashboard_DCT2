<script setup>
import TopBar from "@/components/top_bar/TopBar.vue";
import SubTopBar from "@/components/sub_top_bar/SubTopBar.vue";
import SideBar from "@/components/side_bar/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopBar />
  <SubTopBar />

  <div class="container">
      <SideBar />
      <div class="view-container">
        <RouterView />
      </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.view-container {
  background-color: var(--backcolor);
  width: 100%;
}
</style>