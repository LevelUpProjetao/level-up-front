<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-bold lighten-2 ml-2">
      Compartilhar recurso
    </v-card-title>
    <v-card-text class="dialog-content">
      <v-text-field
        v-model="title"
        label="Título Recurso"
        required
        outlined
      />
      <v-textarea
        v-model="description"
        outlined
        name="about"
        label="Fale mais sobre este conteúdo e como você o utilizou"
      />
      <v-text-field
        v-model="link"
        outlined
        name="about"
        label="Link Recurso"
      />
      <v-checkbox
        v-model="shareAnonymously"
        :label="'Compartilhar Anonimamente'"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="primary"
        class="ml-2 text-none"
        style="textButton"
        @click="closeDialog"
      >
        Fechar
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        @click="save"
      >
        salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
   data: () => ({
    shareAnonymously: false,
    title: "",
    link: "",
    description: ""
  }),
  methods : {
    closeDialog () {
      this.$emit('close')
    },
    save () {
      const values = {
        name: this.title,
        description: this.description,
        link: this.link,
        created_by: this.$store.state.user.id
      }
      if (this.shareAnonymously === true) {
        values.created_by = ""
      }
      this.$emit('save', values)
    }
  }

}
</script>

<style>

</style>