<template>
  <v-card>
    <v-row
      class="pt-5"
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols='10'>
        <v-card-title class="text-h5 font-weight-bold lighten-2 ml-2">
          Compartilhar recurso
        </v-card-title>
      </v-col>
      <v-col cols='2'>
        <v-btn
          outlined
          color="primary"
          class="ml-2 text-none"
          @click="closeDialog"
          style="textButton"
        >
          <v-icon small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card-text class="dialog-content">
      <v-text-field
        label="Título Recurso"
        required
        outlined
      />
      <v-textarea
        outlined
        name="about"
        label="Fale mais sobre este conteúdo e como você o utilizou"
      />
      <v-checkbox
        v-model="shareAnonymously"
        :label="'Compartilhar Anonimamente'"
      />
    </v-card-text>

    <v-card-actions>
      <v-row
        no-gutters
        align="center"
        align-content="center"
        justify="center"
      >
        <v-btn
          color="primary"
          @click="closeDialog"
        >
          salvar
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
   data: () => ({
    shareAnonymously: false,
  }),
  methods : {
    closeDialog () {
      this.$emit('close')
    }
  }

}
</script>

<style>

</style>