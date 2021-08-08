<template>
  <div>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h2 class="textTitle">
          Minhas skills
        </h2>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            text
          >
            <span class="textSeeMore text-none">Ver todas</span>
          </v-btn>
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
          >
            Crie sua própria skill
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="index in 10"
        :key="index"
        cols="2"
        md="4"
        lg="2"
      >
        <MoleculeCardSkill />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSkill from "../molecules/MoleculeCardSkill.vue"
export default {
  name: 'OrganismMySkills',
  components:{
    MoleculeCardSkill
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
.textButton{
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;

}
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}
.textSeeMore{
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
}
</style>
