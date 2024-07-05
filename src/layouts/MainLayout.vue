<script setup>
import TopBar from "@/components/top_bar/TopBar.vue";
import SubTopBar from "@/components/sub_top_bar/SubTopBar.vue";
import SideBar from "@/components/side_bar/SideBar.vue";
</script>

<template>
  <TopBar />
  <SubTopBar />

  <div class="container">
      <SideBar />
      <div class="test">
        view
      </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>