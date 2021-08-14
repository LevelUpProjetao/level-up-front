<template>
  <v-row justify="space-between">
    <v-col cols="8">
      <organism-course class="mb-3" />
      <organism-shared-ressources class="mb-3" />
      <organism-tags />
    </v-col>
    <v-col cols="4">
      <organism-simillar-skills />
    </v-col>
  </v-row>
</template>

<script>
import OrganismCourse from '../components/organisms/OrganismCourse.vue'
import OrganismSharedRessources from '../components/organisms/OrganismSharedRessources.vue'
import OrganismTags from '../components/organisms/OrganismTags.vue'
import OrganismSimillarSkills from '../components/organisms/OrganismSimillarSkills.vue'

export default {
  name: 'SimillarSkills',
  components:{
  OrganismCourse,
  OrganismSharedRessources,
  OrganismTags,
  OrganismSimillarSkills
  }
}
</script>

<style>

</style>