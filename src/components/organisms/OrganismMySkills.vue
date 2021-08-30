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
          {{ getTitle }}
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
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    v-model="form.name"
                    label="Título da skill"
                    required
                    outlined
                    :rules="[
                      v => !!v || 'A skill precisa de titulo',
                      v => (v && v.length <= 20) || 'O titulo deve ter menos de 20 caracteres.',
                    ]"
                  />
                  <v-select
                    v-model="form.level"
                    :items="items"
                    :rules="[v => !!v || 'Selecione o nivel']"
                    label="Nível"
                    required
                    outlined
                  />
                  <v-textarea
                    v-model="form.description"
                    outlined
                    name="about"
                    label="Fale mais sobre essa skill"
                    required
                    :rules="[
                      v => !!v || 'Descreva um pouco a skill'
                    ]"
                  />
                </v-form>
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
                  @click="submitForm"
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
        <div @click="goToCourseDetails">
          <MoleculeCardSkill :skill="skill" />
        </div>
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
        <div @click="goToCourseDetails(skill)">
          <MoleculeCardSkill
            :skill="skill"
            @click="goToCourseDetails(skill)"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSkill from "../molecules/MoleculeCardSkill.vue"
import api from "../../api/axios"
  import router from "../../router";
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
    valid: false,
    items: ["Iniciante", "Intermediário", "Avançado"],
    form: {name: '', level: '',description:""}
  }),
  computed:{
    getTitle(){
      return !this.viewCollaborator? "Olá " + this.$store.state.user.name : "Minhas Skills"
    },
    skillsLimited(){
      if(Array.isArray(this.skills)){
        let limit
        if(!this.viewCollaborator){
          return this.skills.slice(0,6)
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
  methods:{
    goToCourseDetails (skill) {
      console.log(skill)
      this.$router.push({
        name: 'course',
        params: { data: skill}
      });
    },
    goToLogin(){
      router.push("/login");
    },
    async submitForm() {
      if (!this.$refs.form.validate()) {
        return;
      }
      const values = {
        name: this.form.name,
        level: this.form.level,
        description: this.form.description,
        created_by: this.$store.state.user.id
      };
      try {
        await api.post('/skills', values);
        this.dialog = false;
        this.$store.dispatch("addAlert", { color: "success" , message: "Sua skill foi criada com sucesso." });
      } catch (err) {
        this.$store.dispatch("addAlert", { color: "error" , message: "Algo deu errado na hora de criar sua skill." });
      }
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
