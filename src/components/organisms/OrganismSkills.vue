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
      class="skillsSectionHeader"
    >
      <v-col cols="auto">
        <h3 class="textTitle">
          Skills Recomendadas
        </h3>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            text
            class="textSeeMore text-none"
            @click="seeAllFunction"
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
        v-for="(skill,index) in getSkill"
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
    seeAll: false
  }),
  computed: {
    getSkill(){
      if(this.seeAll){
        return this.skills
      }else{
        return this.skills.slice(0,4)
      }
    }
  },
  methods:{
    seeAllFunction(){
      this.seeAll = !this.seeAll
    },
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>
.skillsSectionHeader {
  margin-top: 15px;
  margin-bottom: 5px;
}
.textTitle{
  font-size: 25px;
}
.textSeeMore{
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
}
</style>
