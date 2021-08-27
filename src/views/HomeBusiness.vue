<template>
  <v-row justify="space-between">
    <v-col
      cols="7"
      class="px-8"
    >
      <OrganismBusinessHomeLeft />
    </v-col>
    <v-col cols="5">
      <OrganismBusinessHomeRight />
    </v-col>
  </v-row>
</template>

<script>
import OrganismBusinessHomeLeft from "../components/organisms/OrganismBusinessHomeLeft.vue"
import OrganismBusinessHomeRight from "../components/organisms/OrganismBusinessHomeRight.vue"

export default {
  components:{
    OrganismBusinessHomeLeft,
    OrganismBusinessHomeRight,
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
