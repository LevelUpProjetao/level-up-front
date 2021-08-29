<template>
  <div>
    <v-avatar v-if="url">
      <img
        :src="url"
        alt="John"
      >
    </v-avatar>
    <v-avatar
      v-else
      color="indigo"
    >
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    <div />
  </div>
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
