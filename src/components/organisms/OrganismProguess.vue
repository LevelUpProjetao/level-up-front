<template>
  <div
    style="background:white"
    class="pt-2 pb-10 px-9 "
  >
    <h3 class="mb-2">
      Progresso das Skills
    </h3>
    <v-row
      no-gutters
      justify="space-between"
      justify-md="center"
    >
      <v-col
        cols="auto"
        md="6"
      >
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="getValue"
          color="#27AE60"
          style="width:130px; height:130px"
          class="ml-3"
        >
          {{ getValue }}%
        </v-progress-circular>
      </v-col>
      <v-col
        cols="auto"
        md="6"
        class="text-start"
      >
        <h3>{{ finilized_skills }}/{{ total_skills }}</h3>
        <span>Skill adquiridas</span>
        <h3 class="mt-2">
          {{ resourceCounts }}
        </h3>
        <span>Recursos compartilhados</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "../../api/axios"

export default {
  components:{
    
  },
  data: () => ({
    value:12.5,
    finilized_skills: 0,
    total_skills: 0,
    resourceCounts:0
  }),
  computed:{
    getValue(){
      if(this.resourceCounts == 0){
        return 0
      }else{
        return (this.finilized_skills/this.resourceCounts)*100
      }
    }
  },
  
  async created(){
    console.log('user: ');
    console.log(this.$store.state.user);
    const skillsCounts = (await api.get(`/users/${this.$store.state.user.email}/skills_count`)).data
    this.finilized_skills = skillsCounts.finilized_skills
    this.total_skills = skillsCounts.total_skills
    const resourceCounts = (await api.get(`/users/${this.$store.state.user.email}/resources_count`)).data
    console.log(resourceCounts);
  }
};
</script>
<style scoped>

</style>
