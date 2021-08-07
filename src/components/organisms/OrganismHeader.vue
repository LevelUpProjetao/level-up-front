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

    <div class="centerElements mr-5">
      <MoleculeUserPhoto />
      
      <h3 class="ml-3">
        Jorge Antonio
      </h3>
    </div>
  </v-app-bar>
</template>

<script>
import MoleculeUserPhoto from '../molecules/MoleculeUserPhoto.vue'
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
</style>
