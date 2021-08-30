<template>
  <v-card
    style="cursor: pointer"
    class="mx-auto"
    max-width="344"
    min-height="200"
    max-height="200"
  >
    <v-card-title>
      <h3 class="title_skill">
        {{ skill.name || 'titutlo' }}
      </h3>
    </v-card-title>
    <v-card-subtitle>
      <h4 class="proguess_skill">
        {{ getStatus }}
      </h4>
    </v-card-subtitle>
    <v-card-text>
      <p
        class="text_skill mb-0 d-flex-inline"
      >
        {{ getDescription }} 
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:{
    skill: {
        type: Object,
        default: () => {}
      }
  },
  
  computed: {
    getStatus(){
      if(this.skill.status){
        return this.skill.status
      }else{
        if(this.skill?.users_in_progress){
          if(this.skill?.users_in_progress>1){
            return this.skill?.users_in_progress["1Ig0FWZqjbANqiOiVUak"] + " Colaboradores"
          }else{
            return this.skill?.users_in_progress["1Ig0FWZqjbANqiOiVUak"] + " Colaborador"
          }
        }else{
          return 0 + " Colaborador"
        }
        // return 2
      }
    },
    getDescription(){
      const description = this.skill.description
      if(description.length>80){
        return description.slice(0,79) + "..." 
      }else{
        return description
      }
      
    }


  }
}
</script>
<style scoped>
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
    color:#6C63FF
}
.text_skill{
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
}
</style>
