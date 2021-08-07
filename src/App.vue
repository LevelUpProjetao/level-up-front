<template>
  <v-app>
    <OrganismHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router";
import OrganismHeader from './components/organisms/OrganismHeader.vue';
  export default {
  name: 'App',
  components:{
    OrganismHeader
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
