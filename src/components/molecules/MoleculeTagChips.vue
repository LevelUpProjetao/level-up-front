<template>
  <v-chip
    class="ma-2"
    large
    text-color="white"
    color="#00CCD6"
    label
  >
    {{ tag }}
  </v-chip>
</template>

<script>
export default {
  props:{
    tag: {
      type: String,
      default: () => ""
    }
  }
}
</script>

<style>
</style>