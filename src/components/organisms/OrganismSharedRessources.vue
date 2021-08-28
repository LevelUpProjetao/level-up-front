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
        v-for="index in 10"
        :key="index"
        cols="4"
      >
        <div @click="openRessource">
          <molecule-ressource />
        </div>
      </v-col>
    </v-row>
    <v-dialog 
      v-model="openRessourceDialog"
      max-width="500"
    >
      <molecule-ressource-dialog @close="closeRessourceDialog" />
    </v-dialog>
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
import MoleculeRessourceDialog from '../molecules/MoleculeRessourceDialog.vue'
import MoleculeShareRessourceDialog from '../molecules/MoleculeShareRessourceDialog.vue'
export default {
  components: {
    MoleculeRessource,
    MoleculeRessourceDialog,
    MoleculeShareRessourceDialog
  },
  data: () => ({
    openRessourceDialog: false,
    openShareRessourceDialog: false
  }),
  methods: {
    openRessource () {
      this.openRessourceDialog = true
    },
    closeRessourceDialog () {
      this.openRessourceDialog = false
    },
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