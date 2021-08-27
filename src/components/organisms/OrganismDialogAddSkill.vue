<template>
  <v-dialog
    v-model="dialog"
    width="600"
    @click:outside="closeDialog()"
  >
    <v-card>
      <v-card-title class="text-h4 font-weight-bold lighten-2">
        Adicionar skill
      </v-card-title>

      <v-card-text class="dialog-content">
        <v-text-field
          v-model="title"
          label="Nome da Skill"
          required
          outlined
        />
        <v-textarea
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
              v-model="form.resource.name"
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
              v-model="form.resource.description"
              label="Descrição do Recurso"
              required
              outlined
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="form.resource.link"
              label="Link"
              required
              outlined
            />
          </v-col>
          <v-col
            cols="1"
            class="mt-3"
          >
            <v-btn
              color="primary"
              text
              @click="addNewResource()"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
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
    form: {title:'',description: '', resource: [{name:'',description:'',link:''}]}
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    addNewResource(){
      this.form.resource.push({name:'',description:'',link:''})
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
