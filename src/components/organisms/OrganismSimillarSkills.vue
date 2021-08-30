<template>
  <div>
    <v-row justify="end">
      <h2>
        Skills Semelhantes
      </h2>
    </v-row>
    <v-row
      v-for="simillarSkill in simillarSkills"
      :key="simillarSkill.id"
      justify="end"
    >
      <MoleculeCardSummarySkill :skill="simillarSkill" />
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSummarySkill from "../molecules/MoleculeCardSumarySkill.vue"
import api from "../../api/axios"
export default {
  name: 'OrganismSimillarSkills',
  components:{
    MoleculeCardSummarySkill
  },
  props:{
    skillId: {
      type: String,
      default: () => ""
    }
  },
  data: () => ({
    simillarSkills: []
  }),
  async created () {
    if(this.skillId){
      this.simillarSkills = (await api.get(`/skills/${this.skillId}/similar`)).data
    }
    
  }

}
</script>

<style scoped>

</style>