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
          Oratória
        </h1>
        <h6 class="ml-1">
          criado por:
          <a> LevelUp</a>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin convallis blandit orci at euismod. Mauris augue nunc, rhoncus non suscipit eu, mattis quis justo.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit odio, aliquet at libero at, luctus vulputate leo.
      </p>
    </v-row>
    <v-row>
      <v-col
        v-for="index in 10"
        :key="index"
        cols="4"
      >
        <molecule-ressource />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeRessource from '../molecules/MoleculeRessource.vue'
export default {
  components: {
    MoleculeRessource
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