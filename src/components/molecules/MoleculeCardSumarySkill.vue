<template>
  <v-card
    class="mx-0 mb-5"
    max-width="286"
    max-height="105"
  >
    <div class="centerItem">
      <div class="div_left_color" />
      <div style="background: rgba(196, 196, 196, 0.22); width:100%">
        <v-card-title class="pt-1">
          <h3 class="title_skill">
            {{ skill.name }}
          </h3>
        </v-card-title>
        <v-card-subtitle class="pb-1">
          <v-row
            no-gutters
            dense
          >
            <p
              class="proguess_skill my-0"
              color="primary"
            >
              Criado por: 
            </p>
            <p class="proguess_skill text_Color ml-1 my-0">
              {{ createdBy }}
            </p>
          </v-row>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="primary"
            small
            class="styleButton"
          >
            {{ skill.level }}
          </v-btn>
          <v-btn
            color="primary"
            small
            class="styleButton"
          >
            Level Up
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  
  props:{
    skill: {
      type: Object,
      default: () => {}
    },
  },

  data: () => ({
    //
  }),
  computed: {
    createdBy(){
      return this.skill?.created_by || "Level Up"
    }
  },
  created(){
    console.log(this.skill);
  }
};
</script>
<style scoped>
.styleButton{
    font-size: 11px;
}
.text_Color{
    color: #6C63FF;
}
.centerItem{
    display: flex;
    flex-direction: row;
    
}
.div_left_color{
    width: 50px;
    height: 105px;
    background: #00CCD6;
}
.title_skill{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
}
.proguess_skill{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
}
.text_skill{
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
}
</style>
