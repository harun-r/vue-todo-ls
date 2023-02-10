<template>
  <button @click="goToAbout">Go to About</button>
  <h3>Welcome to home</h3>
</template>

<script>
export default {
  name: "home-page",
  methods:{
    goToAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>

</style>