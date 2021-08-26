<template>
  <v-row justify="space-between">
    <v-col cols="12">
      <div
        class="skills__back-section"
        @click="goToHome()"
      >
        <v-icon>
          mdi-arrow-left
        </v-icon>
        <span>Voltar para Início</span>
      </div>
    </v-col>
    <v-col cols="12">
      <OrganismUserSkillsList />
    </v-col>
  </v-row>
</template>

<script>
  import OrganismUserSkillsList from "../components/organisms/OrganismUserSkillsList.vue"
  import router from "../router"

  export default {
    name: 'UserSkills',
    components:{
      OrganismUserSkillsList,
    },

    data: () => ({
      //
    }),
    methods:{
      goToHome(){
        router.push("/home");
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
  .skills__back-section {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
  }
  .skills__back-section span{
    color: rgba(0, 0, 0, 0.54);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 133%;
    margin-left: 10px;
  }
</style>
