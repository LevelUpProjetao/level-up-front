<template>
  <v-row>
    <v-col
      cols="3"
      class="containerImg"
    >
      <v-img
        max-width="60%"
        
        :src="getImage"
      />
    </v-col>
    <v-col
      cols="9"
      class="pa-0"
    >
      <div class="containerText pl-4 pt-2">
        <h3 class="">
          {{ card.title }}
        </h3>
        <p>{{ card.description }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// src="../../assets/newSkill.png"
export default {
  props:{
    card: {
      type: Object,
      default: () => {}
    },
  },

  data: () => ({
    img: '../../assets/seeContributor.png'
  }),
  computed: {
    getImage(){
      // alert(this.card.img);
      console.log(this.img);
      console.log('../../assets/seeContributor.png');
      const path = 'seeContributor.png'
      return require('../../assets/' +  this.card.img)
    }
  },
  methods:{
  }
};
</script>
<style scoped>
.containerText{
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 104px;
}
.containerImg{
  background: #00CCD6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;

}
</style>
