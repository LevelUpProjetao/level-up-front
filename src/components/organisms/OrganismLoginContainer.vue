<template>
  <v-row 
    justify="center" 
    align="center"
    class="login_container"
  >
    <h1>
      Bem-vindo à Level Up!
    </h1>
    <MoleculeLoginButton />
  </v-row>
</template>

<script>
  import router from "../../router"
  import MoleculeLoginButton from '../molecules/MoleculeLoginButton.vue';
  export default {
    name: 'OrganismLoginContainer',
    components: {
      MoleculeLoginButton,
    },
  }
</script>

<style scoped lang="scss">
  .login_container {
    width: 50%;
    background-color: white;
    border-radius: 10px;
    flex: none;
    flex-direction: column;
    padding: 10rem 5rem;
    min-width: 35rem;

    & > h1 {
      margin-bottom: 2rem;
    }
  }
</style>