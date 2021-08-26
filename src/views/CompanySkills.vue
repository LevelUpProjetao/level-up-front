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
      <span>Skills: {{companyName}}</span>
    </div>
    <div class="skills__button">
      <v-btn color="primary" elevation="2">Adicionar Skill</v-btn>
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
    >
      <template v-slot:[`item.action`]="{item}">
        <v-icon v-on:click="openEditDialog(item)">mdi-pencil </v-icon>
        <v-icon v-on:click="openDeleteDialog(item)" large>mdi-alpha-x </v-icon>
      </template>
    </v-data-table>
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
            text: 'Skills',
            align: 'start',
            sortable: false,
            value: 'skills',
          },
          { text: 'Descrição', value: 'description', sortable: false, },
          { text: 'Recursos', value: 'recursos', sortable: false, },
          { text: 'Tags', value: 'tags', sortable: false, },
          { text: 'Ações', value: 'action', sortable: false, },
        ],
        data: [
          {
            skills: 'Frozen Yogurt',
            description: 159,
            recursos: 'BOB',
            tags: 'BOB',
            action: '<v-icon dark>mdi-heart</v-icon>'
          },
          {
            skills: 'Ice cream sandwich',
            description: 237,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Eclair',
            description: 262,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Cupcake',
            description: 305,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Gingerbread',
            description: 356,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Jelly bean',
            description: 375,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Lollipop',
            description: 392,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Honeycomb',
            description: 408,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'Donut',
            description: 452,
            recursos: 'BOB',
            tags: 'BOB',
            action: 'lapis e xis'
          },
          {
            skills: 'KitKat',
            description: 518,
            recursos: 'BOB',
            tags: 'BOB',
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