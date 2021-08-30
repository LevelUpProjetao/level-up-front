<template>
  <div v-if="resource">
    <v-card
      :title="resource.name"
      color="white"
      @click="openRessource"
    >
      <v-card-title>
        <div
          class="resource-title"
        >
          {{ resource.name }}
        </div>
      </v-card-title>
    </v-card>
    <v-dialog 
      v-model="openRessourceDialog"
      max-width="500"
    >
      <molecule-ressource-dialog
        :resource-info="resource"
        @close="closeRessourceDialog"
      />
    </v-dialog>
  </div>
</template>

<script>
import MoleculeRessourceDialog from '../molecules/MoleculeRessourceDialog.vue'

export default {
  components: {
    MoleculeRessourceDialog
  },
  props:{
    resource: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    openRessourceDialog: false
  }),
  methods: {
    openRessource () {
      this.openRessourceDialog = true
    },
    closeRessourceDialog () {
      this.openRessourceDialog = false
    },
  }
}
</script>

<style scoped>
.resource-title {
  font-size: 15px;
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap;
}
</style>