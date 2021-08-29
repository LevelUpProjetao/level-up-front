<template>
  <v-dialog
    v-model="dialog"
    width="600"
    @click:outside="closeDialog()"
  >
    <v-card>
      <v-card-title class="text-h4 font-weight-bold lighten-2">
        Adicionar colaborador
      </v-card-title>

      <v-card-text class="dialog-content">
        <v-text-field
          v-model="form.name"
          label="Nome do colaborador"
          required
          outlined
        />
        <v-text-field
          v-model="form.area"
          label="Área"
          required
          outlined
        />
        <v-text-field
          v-model="form.cargo"
          label="Cargo"
          required
          outlined
        />
        <v-text-field
          v-model="form.email"
          label="E-mail"
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
          @click="closeDialog"
        >
          Adicionar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'OrganismMySkills',
  props:{
    dialog: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    title: '',
    items: ["Iniciante", "Intermediário", "Avançado"],
    form: {name:'',cargo: '', area:'', email:''}
  }),
  methods: {
    closeDialog(){
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
