<template>
  <v-row justify="space-between">
    <v-col cols="12">
      <v-row
        no-gutters
        align="center"
        align-content="center"
        justify="space-between"
      >
        <v-col cols="auto">
          <h2 class="textTitle">
            Atualizar plataforma
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.
          </p>
        </v-col>
      </v-row>
      <v-row
        v-for="(card,index) in cards"
        :key="index"
        justify="center"
      >
        <v-col cols="11">
          <OrganismCardUpdatePlatform
            class="my-2"
            :card="card"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import OrganismCardUpdatePlatform from "./OrganismCardUpdatePlatform.vue"
export default {
  name: 'Home',
  components:{
    OrganismCardUpdatePlatform
  },

  data: () => ({
    cards: [
      {
        img: 'seeContributor.png',
        title: 'Ver todos Colaboradores(as)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.'
      },
      {
        img: 'addCollaborator.png',
        title: 'Adicionar Colaborador(a)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.'
      },
      {
        img: 'seeSkills.png',
        title: 'Ver todas as skills',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.'
      },
      {
        img: 'newSkill.png',
        title: 'Adicionar nova skill',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis blandit orci at euismod.'
      }
    ]
  }),
  methods:{
    goToLogin(){
      router.push("/login");
    }
  }
};
</script>
<style scoped>
.centerElements{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
