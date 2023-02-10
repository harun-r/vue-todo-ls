<template>
  <button @click="goToHome">Go to About</button>
  <h3>Welcome to About</h3>
</template>

<script>
export default {
  name: "about-page",
  methods:{
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>