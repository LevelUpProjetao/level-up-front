<template>
  <v-row justify="space-between">
    <v-col cols="12">
      <OrganismMySkills
        :skills="skills"
        view-collaborator
      />
    </v-col>
    <v-col cols="5">
      <OrganismProguess />
      <OrganismNewResource class="mt-5" />
    </v-col>
    <v-col cols="7">
      <OrganismSkills :skills="skillsRecommendations" />
    </v-col>
  </v-row>
</template>

<script>
import OrganismMySkills from "../components/organisms/OrganismMySkills.vue"
import OrganismSkills from "../components/organisms/OrganismSkills.vue"
import OrganismProguess from "../components/organisms/OrganismProguess.vue"
import OrganismNewResource from "../components/organisms/OrganismNewResource.vue"
import api from "../api/axios"
export default {
  name: 'Home',
  components:{
    OrganismMySkills,
    OrganismSkills,
    OrganismProguess,
    OrganismNewResource
  },

  data: () => ({
    skills: undefined,
    skillsRecommendations: undefined
  }),
  async created(){
    this.skills = (await api.get("/skills")).data
    this.skillsRecommendations = (await api.get(`/users/${this.$store.state.user.email}/recommendations`)).data
    console.log('skills: ' , this.skills);
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
