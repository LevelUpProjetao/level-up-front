<template>
  <div>
    <v-row
      align="center"
      align-content="center"
      justify="center"
      class="mt-2"
    >
      <v-col
        v-for="index in 2"
        :key="index"
        cols="6"
      >
        <MoleculeInfoGeneral />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeInfoGeneral from "../molecules/MoleculeInfoGeneral.vue"
export default {
  components:{
    MoleculeInfoGeneral
  },
  props:{
  },

  data: () => ({
    //
  }),
  methods:{
  }
};
</script>

