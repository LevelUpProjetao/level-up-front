<template>
  <div>
    <v-btn @click="login()">
      <v-icon>
        mdi-google
      </v-icon>
      <span class="buttonText">
        Logar com Gmail
      </span>
    </v-btn>
  </div>
</template>

<script>
  import router from "../../router";
  export default {
    methods: {
      login() {
        this.$store.dispatch("setLogged", true);
        router.push('/home')
      },
      logout() {
        this.$store.dispatch("setLogged", false);
      }
    }
  }

</script>

<style scope lang="scss">
  .buttonText {
    margin-left: 1rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.25px;
  }
</style>