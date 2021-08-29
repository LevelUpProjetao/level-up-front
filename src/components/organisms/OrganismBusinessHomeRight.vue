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
            @Click="clickCard"
          />
        </v-col>
      </v-row>
    </v-col>
    <OrganismDialogAddSkill
      :dialog="dialogAddSkill"
      @close="dialogAddSkill=false"
    />
    <OrganismDialogAddContributors
      :dialog="dialogAddContributors"
      @close="dialogAddContributors=false"
    />
  </v-row>
</template>

<script>
import OrganismCardUpdatePlatform from "./OrganismCardUpdatePlatform.vue"
import OrganismDialogAddSkill from "./OrganismDialogAddSkill.vue"
import OrganismDialogAddContributors from "./OrganismDialogAddContributors.vue"
import router from '../../router';
export default {
  name: 'Home',
  components:{
    OrganismCardUpdatePlatform,
    OrganismDialogAddSkill,
    OrganismDialogAddContributors
  },

  data: () => ({
    dialogAddSkill: false,
    dialogAddContributors: false,
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
    clickCard(card){
      console.log(card);
      if(card.title == 'Adicionar Colaborador(a)'){
        console.log('add new colaborador');
        this.dialogAddContributors = true
      }else if(card.title == 'Adicionar nova skill'){
        console.log('add new skill');
        this.dialogAddSkill = true
      }else if(card.title == 'Ver todas as skills'){
        console.log("clicked")
        router.push('company-skills')
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
