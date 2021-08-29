<template>
  <div
    style="background:white"
    class="pt-2 pb-10 px-8 "
  >
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h2 class="textTitle">
          Skills recomendadas
        </h2>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            text
            class="textSeeMore text-none"
          >
            Ver todas
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row
      justify="center" 
      no-gutters
      class="pt-4"
    >
      <v-col
        v-for="(skill,index) in skills.slice(0,4)"
        :key="index"
        cols="auto"
        sm="auto"
        md="auto"
        lg="6"
        class="pa-0"
      >
        <MoleculeCardSummarySkill :skill="skill" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSummarySkill from "../molecules/MoleculeCardSumarySkill.vue"
export default {
  name: 'OrganismSkills',
  components:{
    MoleculeCardSummarySkill
  },
  props:{
    skills: {
      type: Array,
      default: () => []
    },
  },

  data: () => ({
    //
  }),
  methods:{
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}
.textSeeMore{
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
}
</style>
