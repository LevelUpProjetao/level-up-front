<template>
  <v-row
    v-if="resources"
    justify="space-between"
  >
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
      <organism-course
        class="mb-3"
        :skill-info="skillInfo"
        :resources="resources.initial_resources"
      />
      <organism-shared-ressources
        class="mb-3"
        :skill-id="skillInfo.id"
        :resources="resources.shared_resources"
        @updateResource="updateResource"
      />
      <organism-tags :tags="skillInfo.tags" />
    </v-col>
    <v-col cols="4">
      <organism-simillar-skills :skill-id="skillInfo.id" />
    </v-col>
  </v-row>
</template>

<script>
import OrganismCourse from '../components/organisms/OrganismCourse.vue'
import OrganismSharedRessources from '../components/organisms/OrganismSharedRessources.vue'
import OrganismTags from '../components/organisms/OrganismTags.vue'
import OrganismSimillarSkills from '../components/organisms/OrganismSimillarSkills.vue'
import api from "../api/axios"
import router from "../router"

export default {
  name: 'SimillarSkills',
  components:{
  OrganismCourse,
  OrganismSharedRessources,
  OrganismTags,
  OrganismSimillarSkills
  },
  data: () => ({
    skillInfo: null,
    resources: null
  }),
  async created() {
    this.skillInfo = this.$route.params.data;
    this.resources = (await api.get(`/skills/${this.skillInfo.id}/resources`)).data
},
  methods:{
    goToHome(){
      router.push("/home");
    },
    async updateResource () {
      this.resources = (await api.get(`/skills/${this.skillInfo.id}/resources`)).data
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