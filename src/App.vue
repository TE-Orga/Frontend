<script>

import Sidebar from './layouts/Navigation.vue';

export default {
  components: {
    
    Sidebar,
    
  },
};
</script>


<template>
  <div id="app" class="flex">
    <Navbar />
    <Sidebar class="w-1/4" />
    <div class="flex-1 flex flex-col">
      <router-view class="flex-1"></router-view>
    
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
  



