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
    <v-row>
      <v-col
        v-for="index in 10"
        :key="index"
        md="3"
        sm="12"
      >
        <MoleculeCardSkill />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MoleculeCardSkill from "../molecules/MoleculeCardSkill.vue"

export default {
  name: 'OrganismMySkills',
  components: {
    MoleculeCardSkill
  },

  data: () => ({
    dialog: false,
    items: ["Iniciante", "Intermediário", "Avançado"],
    form: {name: '', level: '',description:""}
  }),
  methods: {
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
