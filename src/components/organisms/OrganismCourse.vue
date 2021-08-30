<template>
  <div>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h1 class="textTitle">
          {{ skillInfo.name }}
        </h1>
        <h6 class="ml-1">
          criado por:
          <a> {{ skillInfo.created_by === "plataform" ? "LevelUp" : skillInfo.created_by }}</a>
        </h6>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
          >
            Adicionar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <p class="ml-4">
        {{ skillInfo.description }}
      </p>
    </v-row>
    <v-row>
      <v-col
        v-for="resource in resources"
        :key="resource.id"
        cols="4"
      >
        <molecule-ressource :resource="resource" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeRessource from '../molecules/MoleculeRessource.vue'
export default {
  components: {
    MoleculeRessource
  },
  props:{
    skillInfo: {
      type: Object,
      default: () => {}
    },
    resources: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}
</style>