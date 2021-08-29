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
        Em progresso
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
    getDescription(){
      const description = this.skill.description
      if(description.length>100){
        return description.slice(0,99) + "..." 
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
    color:red
}
.text_skill{
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
}
</style>
