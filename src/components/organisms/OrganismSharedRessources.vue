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
          Recursos Compartilhados
        </h1>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
            @click="openShareRessource"
          >
            <v-icon small>
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="resourceId in resources"
        :key="resourceId"
        cols="4"
      >
        <molecule-ressource :resource-id="resourceId" />
      </v-col>
    </v-row>
    <v-dialog 
      v-model="openShareRessourceDialog"
      max-width="500"
    >
      <molecule-share-ressource-dialog @close="closeShareRessourceDialog" />
    </v-dialog>
  </div>
</template>

<script>
import MoleculeRessource from '../molecules/MoleculeRessource.vue'
import MoleculeShareRessourceDialog from '../molecules/MoleculeShareRessourceDialog.vue'
export default {
  components: {
    MoleculeRessource,
    MoleculeShareRessourceDialog
  },
  props:{
    resources: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    openShareRessourceDialog: false
  }),
  methods: {
    openShareRessource () {
      this.openShareRessourceDialog = true
    },
    closeShareRessourceDialog () {
      this.openShareRessourceDialog = false
    }
  }

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