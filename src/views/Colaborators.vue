<template>
<div class = "skills">
  <div class="skills__back-section"  v-on:click="navigateToOverview()">
    <v-icon>
      mdi-arrow-left
    </v-icon>
    <span>Voltar para Overview</span>
  </div>
  <div class="skills__horizontal-1">
    <div class="skills__header">
      <span>Colaboradores</span>
    </div>
    <div class="skills__button">
      <v-btn color="primary" elevation="2">Adicionar Colaborador</v-btn>
    </div>
  </div>
  <div class="skills__body-text">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis neque incidunt porro perspiciatis repudiandae illo quibusdam facere quasi rem?</span>
  </div>
  <div class="skills__table">
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</div>
</template>
<script>
  import router from "../router";
  export default {
    methods: {
      navigateToOverview() {
        router.push('home')
      }
    },
    data () {
      return {
        companyName: "CIn",
        headers: [
          {
            text: 'Colaborador',
            align: 'start',
            sortable: false,
            value: 'colaborator',
          },
          // { text: 'Skills', value: 'skills' },
          { text: 'Área', value: 'area', sortable: false, },
          { text: 'Cargo', value: 'cargo', sortable: false, },
          { text: 'Email', value: 'email', sortable: false, },
          { text: 'Ações', value: 'action', sortable: false, },
        ],
        data: [
          {
            colaborator: 'Frozen Yogurt',
            area: 159,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Ice cream sandwich',
            area: 237,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Eclair',
            area: 262,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Cupcake',
            area: 305,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Gingerbread',
            area: 356,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Jelly bean',
            area: 375,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Lollipop',
            area: 392,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Honeycomb',
            area: 408,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'Donut',
            area: 452,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
          {
            colaborator: 'KitKat',
            area: 518,
            cargo: 'BOB',
            email: 'BOB',
            action: 'lapis e xis'
          },
        ],
      }
    },
  }
</script>

<style scoped lang="scss">
  .skills {
    margin-right: 300px;
    min-width: 500px;
  }
  .skills__back-section {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
  }
  .skills__back-section span{
    color: rgba(0, 0, 0, 0.54);
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 133%;
  }
  .skills__horizontal-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 29px;
  }
  .skills__header {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 133%;
  }
  .skills__body-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }
</style>