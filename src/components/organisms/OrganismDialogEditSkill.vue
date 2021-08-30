<template>
  <v-dialog
    v-model="dialog"
    width="600"
    @click:outside="closeDialog()"
  >
    <v-card>
      <v-card-title class="text-h4 font-weight-bold lighten-2">
        Editar skill
      </v-card-title>

      <v-card-text class="dialog-content">
        <v-text-field
          v-model="form.name"
          label="Nome da Skill"
          required
          outlined
        />
        <v-select
          v-model="form.level"
          :items="level"
          label="Nível da skill"
          chips
          required
          outlined
        />
        <v-textarea
          v-model="form.description"
          outlined
          name="about"
          label="Fale mais sobre essa skill"
        />
        <v-row
          v-for="(card,index) in form.resource "
          :key="index"
          no-gutters
        >
          <v-col cols="3">
            <v-text-field
              v-model="form.resource[index].name"
              label="Recurso"
              required
              outlined
            />
          </v-col>
          <v-col
            cols="4"
            class="mx-4"
          >
            <v-text-field
              v-model="form.resource[index].description"
              label="Descrição do Recurso"
              required
              outlined
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="form.resource[index].link"
              label="Link"
              required
              outlined
            />
          </v-col>
          <v-col
            cols="1"
            class=""
          >
            <v-btn
              color="primary"
              text
              small
              @click="addNewResource()"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
              v-show="form.resource.length > 1"
              color="primary"
              text
              small
              @click="removeNewResource(index)"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-select
          v-model="form.tags"
          :items="tags"
          label="Habilidades que já possui"
          multiple
          chips
          required
          outlined
        />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn
          color="primary"
          text
          @click="closeDialog"
        >
          Fechar
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          @click="addSkill"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import api from "../../api/axios"

export default {
  name: 'OrganismMySkills',
  props:{
    dialog: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
    }
    // skillName: {
    //   type: String,
    //   default: ''
    // },
    // level: {
    //   type: String,
    //   default: ''
    // },
    // description: {
    //   type: String,
    //   default: ''
    // },
    // resource: {
    //   type: Array,
    //   default: [{name:'',description:'',link:''}]
    // },
    // tags: {
    //   type: Array,
    //   default: []
    // },
  },
  data: () => ({
    tags: [],
    level: ["Iniciante" , "Básico" , "Intermediário" , "Avançado"],
    // form: {name:'',level:'',description: '', resource: [{name:'',description:'',link:''}], tags: []}
  }),
  async created(){
    const tagsData = await api.get("/tags")
    this.tags = tagsData.data.map(tag=> tag.name)
    console.log(this.skillName)
    this.form.name = this.skillName;
    console.log(tagsData);
  },
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    async addSkill(){
      console.log("adding skill");
      try {
        const tagsData = await api.post("/skills",this.form)
        this.$store.dispatch("addAlert", {color: "success" , message: "Sua skill foi criada com sucesso."});
      } catch (error) {
        console.error(error);
        this.$store.dispatch("addAlert", {color: "error" , message: "Opss... Erro interno tente mais tarde"});
      }
      

    },
    addNewResource(){
      this.form.resource.push({name:'',description:'',link:''})
    },
    removeNewResource(index){
      this.form.resource.splice(index,1)
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
.dialogContent {
  padding-top: 20px;
}
</style>
