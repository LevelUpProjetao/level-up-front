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
                Adicionar nova skill
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
    <v-row v-if="skillsLimited.length > 0">
      <v-col
        v-for="(skill, index) in skillsLimited"
        :key="index"
        cols="2"
        sm="4"
        md="3"
        lg="2"
      >
        <MoleculeCardSkill :skill="skill" />
      </v-col>
    </v-row>
    <v-row
      v-else
      no-gutters
      class="mt-4"
    >
      <h3>Nenhuma skill adicionada até o momento.</h3>
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSkill from "../molecules/MoleculeCardSkill.vue"
import api from "../../api/axios"

export default {
  name: 'OrganismMySkills',
  components: {
    MoleculeCardSkill
  },
  data: () => ({
    dialog: false,
    items: ["Iniciante", "Intermediário", "Avançado"],
    form: {name: '', level: '', description: ''},
    skills: []
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
        console.log(array)
        return array
      } else {
        return []
      }
    }
  },
  async created(){
    this.skills = (await api.get(`/users/${this.$store.state.user.email}/skills`)).data
    // this.skills = (await api.get("/skills")).data
    console.log('skills: ' , this.skills)
  },
  methods: {
    async updateSkills() {
      this.skills = (await api.get("/skills")).data
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
      this.updateSkills();
    }
  },
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
.dialogContent {
  padding-top: 20px;
}
</style>
