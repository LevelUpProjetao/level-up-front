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
      <v-col
        v-if="showButtons"
        cols="auto"
      >
        <div>
          <v-btn
            text
            :to="{ name: 'collaborator-skills'}"
          >
            <span class="textSeeMore text-none">Ver todas</span>
          </v-btn>
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                class="ml-2 text-none"
                style="textButton"
                v-bind="attrs"
                v-on="on"
              >
                Crie sua própria skill
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h4 font-weight-bold lighten-2">
                Adicionar skill
              </v-card-title>

              <v-card-text class="dialog-content">
                <v-text-field
                  v-model="form.name"
                  label="Título da skill"
                  required
                  outlined
                />
                <v-select
                  v-model="form.level"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Nível"
                  required
                  outlined
                />
                <v-textarea
                  v-model="form.description"
                  outlined
                  name="about"
                  label="Fale mais sobre essa skill"
                />
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Fechar
                </v-btn>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="dialog = false"
                >
                  Adicionar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <v-row
      v-if="!viewCollaborator"
    >
      <v-col
        v-for="(skill, index) in skillsLimited"
        :key="index"
        cols="4"
      >
        <MoleculeCardSkill :skill="skill" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="(skill, index) in skillsLimited"
        :key="index"
        cols="2"
        md="4"
        lg="2"
      >
        <MoleculeCardSkill :skill="skill" />
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
  props:{
    viewCollaborator: {
      type: Boolean,
      default: () => true
    },
    skills: {
      type: Array,
      default: () => []
    },
    showButtons: {
      type: Boolean,
      default: () => true
    },
  },
  data: () => ({
    dialog: false,
    items: ["Iniciante", "Intermediário", "Avançado"],
    form: {name: '', level: '',description:""}
  }),
  computed:{
    skillsLimited(){
      if(Array.isArray(this.skills)){
        let limit
        if(!this.viewCollaborator){
          return this.skills
        }
        else if(this.$vuetify.breakpoint.mdAndDown){
          limit = 6
        }else if(this.$vuetify.breakpoint.lgAndUp){
          limit = 12
        }
        let array = this.skills.slice(0,limit)
        console.log(array);
        return array
      }else{
        return []
      }
    }
  },
  created(){
    console.log(this.skills);
  },
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
