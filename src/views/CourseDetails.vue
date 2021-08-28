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
  },
  data: () => ({
    //
  }),
  methods:{
    goToHome(){
      router.push("/home");
    }
  }
}
</script>

<style>

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