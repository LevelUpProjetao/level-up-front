<template>
  <v-avatar>
    <img
      :src="url"
      alt="John"
    >
  </v-avatar>
</template>

<script>
  export default {
    props:{
      url: {
        type: String,
        default: ''
      },
    },
  }
</script>
