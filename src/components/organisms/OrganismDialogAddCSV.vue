<template>
  <v-dialog
    v-model="dialog"
    width="600"
    @click:outside="closeDialog()"
  >
    <v-card>
      <v-card-title class="text-h4 font-weight-bold lighten-2">
        Adicionar CSV
      </v-card-title>

      <v-card-text class="dialog-content">
        Você pode adicionar vários colaboradores de uma única vez. Selecione ou arraste um arquivo .csv abaixo, com as colunas: Colaborador | Área | Cargo | Nível | Email. Cada colaborador deve preencher a informação em uma única linha com todos os dados das colunas.
        O nível de um colabora deve ser uma das três opções: Júnior, Pleno ou Sênior.
        <v-file-input
          v-model="file"
          label="File input"
          class="mt-5"
        />
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
            @click="addCSV"
          >
            Adicionar
          </v-btn>
        </v-card-actions>
      </v-card-text>
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
  },
  data: () => ({
    tags: [],
    file: {}
  }),
  async created(){
  },
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    async addCSV(){
      console.log("adding skill");
      console.log(this.file);
      let formData = new FormData();
      formData.append('file', this.file);
      try {
        const tagsData = await api.post("/users",formData,
      {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
        this.$store.dispatch("addAlert", {color: "success" , message: "Colaborador adicionado."});
      } catch (error) {
        console.error(error);
        this.$store.dispatch("addAlert", {color: "error" , message: "Opss... Erro interno tente mais tarde"});
      }
      this.$emit('close')
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
