<template>
  <div
    style="background:white"
    class="pt-2 pb-10 px-0 "
  >
    <h3 class="pl-9">
      Novos recursos
    </h3>
    <v-row
      no-gutters
      justify="space-between"
    >
      <v-carousel
        v-model="model"
        style="height:109px"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(resource,index) in resources"
          :key="index"
          class="pa-0 ma-0"
        >
          <v-sheet>
            <v-row
              no-gutters
              justify="space-around"
              align-content="start"
              class="mt-5"
            >
              <v-col
                v-if="$vuetify.breakpoint.width>1024"
                cols="3"
              >
                <MoleculeUserPhoto
                  style="margin-left:50%"
                />
              </v-col>
              <v-col
                cols="9"
              >
                <div style="width: 90%">
                  <h3>{{ resource.skill_name }}</h3>
                  <span style="width:20px">{{ resource.user_name }}, {{ resource.user_role }}, compartilhou um link em {{ resource.skill_tags[0] }}</span>
                  <div />
                </div>
              </v-col>
            </v-row>
          </v-sheet>
          <!-- <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-row
              align="center"
              justify="center"
            >
              <div class="text-h2">
                <h1>Slide {{ i + 1 }}</h1>
              </div>
            </v-row> 
          </v-sheet>-->
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </div>
</template>

<script>
import api from "../../api/axios"
import MoleculeUserPhoto from "../molecules/MoleculeUserPhoto.vue"
import Vue from "vue"
export default {
  name: 'OrganismNewResource',
  components:{
    MoleculeUserPhoto
  },
  data: () => ({
    value:12.5,
    model: 2,
    resources: [],
  }),
   async created(){
    const last_resources = (await api.get(`/companies/1Ig0FWZqjbANqiOiVUak/last_resources`)).data
    for (const resource of last_resources) {
      console.log(resource.created_by);
      const user = (await api.get(`/users/${resource.created_by}`)).data 
      resource.user = user
    }
    console.log(last_resources);
    this.resources = last_resources
  },
  methods:{
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>

</style>
