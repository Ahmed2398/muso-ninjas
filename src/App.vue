<template>
  <Navbar />
 <div class="content"></div>
  <router-view/>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
export default {
  components:{ Navbar }
}
</script>

<style >
.content{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
