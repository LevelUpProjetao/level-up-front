<template>
  <div>
    <v-row
      no-gutters
      align="center"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h1 class="textTitle">
          Recursos Compartilhados
        </h1>
      </v-col>
      <v-col cols="auto">
        <div>
          <v-btn
            color="primary"
            class="ml-2 text-none"
            style="textButton"
          >
            <v-icon small>
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}
</style>