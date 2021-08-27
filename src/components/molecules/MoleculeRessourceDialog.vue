<template>
  <v-card>
    <v-row
      class="pt-3"
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="10">
        <v-card-title class="text-h5 font-weight-bold lighten-2">
          Modelo de Apresentação
        </v-card-title>
      </v-col>
      <v-col cols="2">
        <v-btn
          outlined
          color="primary"
          class="ml-2 text-none"
          style="textButton"
          @click="closeDialog"
        >
          <v-icon small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
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
          color="primary"
          size="48"
        />
      </v-col>
      <v-col>
        <div class="ml-3">
          <h5> Jorge </h5>
        </div>
        <div class="ml-3">
          <h6> Eng. Software </h6>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.
            Mauris augue nunc, rhoncus non suscipit eu, mattis quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin elit odio, aliquet at libero at, luctus vulputate leo.
          </p>
        </v-col>
      </v-row>
    </v-row>

    <v-card-text />

    <v-divider />

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
          acessar link
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods : {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>