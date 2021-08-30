<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-bold lighten-2">
      {{ resourceInfo.name }}
    </v-card-title>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <h6 class="ml-4">
        Compartilhado por:
      </h6>
    </v-row>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <v-avatar
          class="ml-4"
          color="grey"
          size="48"
        >
          <v-icon> mdi-account </v-icon>
        </v-avatar>
      </v-col>
      <v-col>
        <div class="ml-3">
          <h5> {{!resourceInfo.created_by ? "Usuário Anônimo" : (resourceInfo.created_by === "platform" ? "LevelUp" : resourceInfo.created_by) }} </h5>
        </div>
      </v-col>
      <v-row
        class="ml-4 mt-3"
        no-gutters
        align="center"
        align-content="center"
        justify="space-between"
      >
        <v-col cols="auto">
          <p>
            {{ resourceInfo.description }}
          </p>
        </v-col>
      </v-row>
    </v-row>

    <v-card-text />

    <v-divider />

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
        target="_blank"
        :href="resourceInfo.link"
      >
        acessar link
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    resourceInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods : {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>