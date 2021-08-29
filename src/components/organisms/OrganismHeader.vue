<template>
  <v-app-bar
    app
    color="#fff"
    dark
  >
    <v-img
      alt="LevelUp Logo"
      class="shrink ml-5"
      contain
      src="../../assets/logo.png"
      transition="scale-transition"
      width="204"
    />
      

    <v-spacer />

    <div
      v-if="this.$store.state.isLogged"
      class="centerElements mr-5"
    >
      <MoleculeUserPhoto :url="$store.state.user.photo" />
      
      <h3 class="ml-3">
        {{this.$store.state.user.name}}
      </h3>

      <button 
        type="button"
        class="logoutButton"
        @click="logout()"        
      >
        sair
      </button>
    </div>
  </v-app-bar>
</template>

<script>
import MoleculeUserPhoto from '../molecules/MoleculeUserPhoto.vue'
import router from '../../router';
export default {
  name: 'OrganismHeader',
  components:{
    MoleculeUserPhoto
  },

  data: () => ({
    //
  }),
  methods:{
    goToLogin(){
      router.push("/login");
    },

    logout() {
      this.$store.dispatch("setLogged", false);
      this.$store.dispatch("setUser", null);
      this.goToLogin();
    }
  }
};
</script>
<style scoped>
  .centerElements{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logoutButton {
    color: red;
    border: none;
    outline: none;
    margin-left: 2rem;
    font-family: 'Roboto';
  }
</style>
