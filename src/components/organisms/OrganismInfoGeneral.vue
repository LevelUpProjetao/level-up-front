<template>
  <div>
    <v-row
      align="center"
      align-content="center"
      justify="center"
      class="mt-2"
    >
      <v-col
        v-for="(info,index) in infos"
        :key="index"
        cols="6"
      >
        <MoleculeInfoGeneral
          :number="info.number"
          :text="info.text"
        />
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
    infos: [{number:20, text: "Colaboradores"}, {number:4, text: "Recursos Colaboradores"}, {number:20, text: "Skills da empresa"}, {number:4, text: "Recursos da empresa"}]
  }),
  methods:{
  }
};
</script>