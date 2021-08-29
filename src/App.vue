<template>
  <v-app style="background: #E5E5E5">
    <OrganismHeader />
    <v-main
      class="mx-16 mt-10"
    >
      <v-snackbar
        v-model="$store.state.showAlert"
        top
        :color="$store.state.colorAlert"
      >
        {{ $store.state.messageAlert }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="#9f3dee"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            OK
          </v-btn>
        </template>
      </v-snackbar>
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
