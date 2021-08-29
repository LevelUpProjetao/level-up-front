<template>
  <v-row
    justify="space-between"
    no-gutters
  >
    <v-col cols="12">
      <OrganismMySkills
        :show-buttons="false"
        :skills="skills"
        :view-collaborator="false"
      />
    </v-col>
    <v-row
      class="mt-5"
      align-content="stretch"
      justify="space-between"
      no-gutters
    >
      <v-col cols="5">
        <OrganismSkillContributors />
      </v-col>
      <v-col cols="6">
        <OrganismNewResource />
        <OrganismInfoGeneral class="mt-4" />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import OrganismMySkills from "./OrganismMySkills.vue"
import OrganismNewResource from './OrganismNewResource.vue'
import OrganismSkillContributors from './OrganismSkillContributors.vue'
import OrganismInfoGeneral from './OrganismInfoGeneral.vue'
import api from "../../api/axios"
export default {
  components:{
    OrganismMySkills,
    OrganismSkillContributors,
    OrganismNewResource,
    OrganismInfoGeneral
  },

  data: () => ({
    //
    skills: undefined
  }),
  async created(){
    console.log("Criando tela home-business");
    this.skills = (await api.get("/skills")).data
    console.log(this.skills);
  },
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
