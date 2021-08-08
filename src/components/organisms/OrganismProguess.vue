<template>
  <div
    style="background:white"
    class="pt-2 pb-10 px-9 "
  >
    <h3 class="mb-2">
      Progresso das Skills
    </h3>
    <v-row
      no-gutters
      justify="space-between"
      justify-md="center"
    >
      <v-col
        cols="auto"
        md="6"
      >
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="value"
          color="#27AE60"
          style="width:130px; height:130px"
          class="ml-3"
        >
          {{ value }}%
        </v-progress-circular>
      </v-col>
      <v-col
        cols="auto"
        md="6"
        class="text-start"
      >
        <h3>2/8</h3>
        <span>Skill adquiridas</span>
        <h3 class="mt-2">
          13
        </h3>
        <span>Recursos compartilhados</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'OrganismSkills',
  components:{
    
  },

  data: () => ({
    value:12.5
  }),
  methods:{
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>

</style>
