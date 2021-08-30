<template>
  <div>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h1 class="textTitle">
          {{ skillInfo.name }}
        </h1>
        <h6 class="ml-1">
          criado por:
          <a> {{ skillInfo.created_by === "plataform" ? "LevelUp" : skillInfo.created_by }}</a>
        </h6>
      </v-col>
      <v-col cols="auto">
        <div v-if="!haveSkill">
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
            @click="addSkill"
          >
            Adicionar
          </v-btn>
        </div>
        <div v-else>
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
            text
            outlined
            @click="removeSkill"
          >
            Remover
          </v-btn>
          <v-btn
            color="primary"
            class="ml-4 text-none"
            style="textButton"
            @click="finishSkill"
          >
            Finalizar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <p class="ml-4">
        {{ skillInfo.description }}
      </p>
    </v-row>
    <v-row>
      <v-col
        v-for="resource in resources"
        :key="resource.id"
        cols="4"
      >
        <molecule-ressource :resource="resource" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "../../api/axios"
import MoleculeRessource from '../molecules/MoleculeRessource.vue'
export default {
  components: {
    MoleculeRessource
  },
  props:{
    skillInfo: {
      type: Object,
      default: () => {}
    },
    resources: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    haveSkill: false
  }),
  // computed:{
    
  // },
  // computed:{
  //   showAddButton(){
  //     const user_id = this.$store.state.user.id
  //     const skill_id = this.skillInfo.name + " | " + this.skillInfo.level
      
  //   }
  // },
  async created(){
    console.log('asdsad sad sadsa ');
    const user_id = this.$store.state.user.id
      const skill_id = this.skillInfo.name + " | " + this.skillInfo.level
      console.log(skill_id);
    try {
      const data = (await api.get(`users/${user_id}/skill/${skill_id}`)).data;
      this.haveSkill = data
      } catch (err) {
        console.log(err);
      }
  },
  methods: {
    async addSkill(){
      const user_id = this.$store.state.user.id
      const skill_id = this.skillInfo.id
      try {
        await api.post(`/users/${user_id}/skill`, {skill_id} );
        this.$store.dispatch("addAlert", { color: "success" , message: "Skill adicionada com sucesso." });
      } catch (err) {
        this.$store.dispatch("addAlert", { color: "error" , message: "Algo deu errado na hora de adicionar skill." });
      }
    },
    async finishSkill(){
      const user_id = this.$store.state.user.id
      const skill_id = this.skillInfo.name + " | " + this.skillInfo.level
      try {
        await api.patch(`/users/${user_id}/skill`, {skill_id: skill_id} );
        this.$store.dispatch("addAlert", { color: "success" , message: "Skill finalizada com sucesso." });
        this.$router.push("home")
      } catch (err) {
        this.$store.dispatch("addAlert", { color: "error" , message: "Algo deu errado na hora de adicionar skill." });
      }
    },
    async removeSkill(){
      const user_id = this.$store.state.user.id
      const skill_id = this.skillInfo.name + " | " + this.skillInfo.level
      try {
        await api.delete(`/users/${user_id}/skill/${skill_id}`, {skill_id: skill_id} );
        // await api.delete(`/users/${user_id}/skill/${skill_id}` );
        this.$store.dispatch("addAlert", { color: "success" , message: "Skill removida com sucesso." });
        this.$router.push("home")
      } catch (err) {
        this.$store.dispatch("addAlert", { color: "error" , message: "Algo deu errado na hora de adicionar skill." });
      }
    }
  }
}
</script>

<style scoped>
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}
</style>