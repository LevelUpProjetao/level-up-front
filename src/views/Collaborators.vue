<template>
  <div class="skills">
    <div
      class="skills__back-section"
      @click="navigateToOverview()"
    >
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
        <v-btn
          color="primary"
          elevation="2"
          @click="showDialog"
        >
          Adicionar Colaborador
        </v-btn>
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
      />
    </div>
    <OrganismDialogAddContributors
      :dialog="dialogAddContributors"
      @close="closeDialog"
    />
  </div>
</template>
<script>
  import router from "../router";
  import api from "../api/axios";
  import OrganismDialogAddContributors from "../components/organisms/OrganismDialogAddContributors.vue"
  export default {
    
    components:{
      OrganismDialogAddContributors
    },
    data () {
      return {
        companyName: "CIn",
        dialogAddContributors: false,
        headers: [
          {
            text: 'Colaborador',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Área', value: 'area', sortable: false, },
          { text: 'Cargo', value: 'role', sortable: false, },
          { text: 'Email', value: 'email', sortable: false, },
          
        ],
        data: []
        ,
      }
    },
    async created() {
      this.dialogAddContributors = this.$store.state.showDialogCollaborator
      try {
        console.log(this.$router);
        
        const collaboratorsData = (await api.get("/companies/1Ig0FWZqjbANqiOiVUak/users",this.form)).data
        console.log('colaboradores');
        console.log(collaboratorsData);
        this.data = collaboratorsData
      } catch (error) {
        console.error(error);
        this.$store.dispatch("addAlert", {color: "error" , message: "Opss... Erro interno tente mais tarde"});
      }
    },
    methods: {
      closeDialog(){
        this.dialogAddContributors = false
        this.$store.dispatch("setShowDialogCollaborator", false)
      },
      navigateToOverview() {
        router.push('home-business')
      },
      showDialog(){
        this.dialogAddContributors = !this.dialogAddContributors
      }
    }
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