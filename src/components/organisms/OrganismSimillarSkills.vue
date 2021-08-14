<template>
  <div>
    <v-row justify="end">
      <h2>
        Skills Semelhantes
      </h2>
    </v-row>
    <v-row
      v-for="index in 5"
      :key="index"
      justify="end"
    >
      <MoleculeCardSummarySkill />
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSummarySkill from "../molecules/MoleculeCardSumarySkill.vue"
export default {
  name: 'OrganismSimillarSkills',
  components:{
    MoleculeCardSummarySkill
  },

}
</script>

<style scoped>

</style>