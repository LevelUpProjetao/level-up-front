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
            Realize ações para adicionar/editar colaboradores e atualizar as skills da empresa.
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
            @Click="clickCard"
          />
        </v-col>
      </v-row>
    </v-col>
    <OrganismDialogAddSkill
      :dialog="dialogAddSkill"
      @close="dialogAddSkill=false"
    />
  </v-row>
</template>

<script>
import OrganismCardUpdatePlatform from "./OrganismCardUpdatePlatform.vue"
import OrganismDialogAddSkill from "./OrganismDialogAddSkill.vue"
import router from '../../router';
export default {
  name: 'Home',
  components:{
    OrganismCardUpdatePlatform,
    OrganismDialogAddSkill,
  },

  data: () => ({
    dialogAddSkill: false,
    dialogAddContributors: false,
    cards: [
      {
        img: 'seeContributor.png',
        title: 'Ver todos Colaboradores(as)',
        description: 'Visualize, edite e adicione colaboradores.'
      },
      {
        img: 'addCollaborator.png',
        title: 'Adicionar Colaborador(a)',
        description: 'Adicione um novo colaborador para ter acesso a plataforma.'
      },
      {
        img: 'seeSkills.png',
        title: 'Ver todas as skills',
        description: 'Visualize, edite e adicione skills para os seus colaboradores.'
      },
      {
        img: 'newSkill.png',
        title: 'Adicionar nova skill',
        description: 'Adicione uma nova skill para os seus colaboradores.'
      }
    ]
  }),
  methods:{
    clickCard(card){
      console.log(card);
      if(card.title == "Ver todos Colaboradores(as)" ){
        console.log('add new colaborador');
        this.$router.push("collaborators")
        this.$store.dispatch("setShowDialogCollaborator", false)
      }
      if(card.title == 'Adicionar Colaborador(a)'){
        console.log('add new colaborador');
        this.$router.push("collaborators")
        this.$store.dispatch("setShowDialogCollaborator", true)
      }else if(card.title == 'Adicionar nova skill'){
        console.log('add new skill');
        this.$router.push("company-skills")
        this.$store.dispatch("setShowDialogSkill", true)
      }else if(card.title == 'Ver todas as skills'){
        console.log("clicked")
        router.push('company-skills')
        this.$store.dispatch("setShowDialogSkill", false)
      }
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
