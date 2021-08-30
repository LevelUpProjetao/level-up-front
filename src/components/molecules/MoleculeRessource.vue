<template>
  <div>
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
        :resource="resource"
        @close="closeRessourceDialog"
      />
    </v-dialog>
  </div>
</template>

<script>
import api from "../../api/axios"
import MoleculeRessourceDialog from '../molecules/MoleculeRessourceDialog.vue'

export default {
  components: {
    MoleculeRessourceDialog
  },
  props:{
    resourceId: {
      type: String,
      default: () => ""
    }
  },
  data: () => ({
    openRessourceDialog: false,
    resource: undefined
  }),
  async created () {
    this.resource = (await api.get(`/resources/${this.resourceId}`)).data
    console.log(this.resource)
  },
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
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap;
}
</style>