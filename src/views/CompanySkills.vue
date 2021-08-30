<template>
  <div class="skills">
    <OrganismDialogAddSkill
      :dialog="dialogAddSkill"
      @close="dialogAddSkill = false"
    />
    <OrganismDialogEditSkill
      :dialog="dialogEditSkill"
      :form="dialogEditSkillForm"
      @close="dialogEditSkill = false"
    />
    <div
      class="skills__back-section"
      @click="navigateToOverview()"
    >
      <v-icon> mdi-arrow-left </v-icon>
      <span>Voltar para Overview</span>
    </div>
    <div class="skills__horizontal-1">
      <div class="skills__header">
        <span>Skills: {{ companyName }}</span>
      </div>
      <div class="skills__button">
        <v-btn
          color="primary"
          elevation="2"
          @click="openAddSkillDialog()"
        >
          Adicionar Skill
        </v-btn>
      </div>
    </div>
    <div class="skills__body-text">
      <span>Visualize, edite e adicione skills para os seus colaboradores.</span>
    </div>
    <div class="skills__table">
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="1000"
        class="elevation-1"
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-icon @click="openEditSkillDialog(item)">
            mdi-pencil
          </v-icon>
          <v-icon
            large
            @click="openDeleteDialog(item)"
          >
            mdi-alpha-x
          </v-icon>
        </template>
      </v-data-table>
    </div>
    <OrganismDialogAddSkills
      :dialog="dialogAddSkills"
      @close="closeDialog"
    />
  </div>
</template>
<script>
  import OrganismDialogAddSkill from '../components/organisms/OrganismDialogAddSkill.vue';
  import OrganismDialogEditSkill from '../components/organisms/OrganismDialogEditSkill.vue';
  import OrganismDialogAddSkills from "../components/organisms/OrganismDialogAddSkill.vue"
  import router from "../router";
  import api from "../api/axios"
  export default {
    components: { OrganismDialogAddSkill, OrganismDialogEditSkill,OrganismDialogAddSkills },
    data () {
      return {
        dialogAddSkills: false,
        dialogAddSkill: false,
        dialogEditSkill: false,
        dialogEditSkillForm: {
          name:'',
          level:'',
          description: '',
          resource: [{name:'',description:'',link:''}],
        },
        companyName: "Level Up",
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
          
        ],
        data: [],
      }
    },
    
    async created() {
      this.dialogAddSkills = this.$store.state.showDialogSkill
      const companiesData = await api.get("/skills")
      console.log(companiesData.data)
      this.data = [];
      companiesData.data?.forEach( async (el) => {
        let tagText = '';
        el.tags.forEach(t => tagText += t + ', ')
        let recursoText = '';
        const promises = el.resources?.map(r => {
          return api.get("/resources/" + r);
        });
        if(!promises) 
          this.data.push( {
              skills: el.name,
              description: el.description,
              recursos: recursoText,
              tags: tagText,
              action: '<v-icon dark>mdi-heart</v-icon>'
          });
        console.log("else")
        Promise.all(promises).then(r => {
          r.forEach(aux => {
            recursoText += aux.data.link + '\n';
          })
          console.log(recursoText)
          this.data.push( {
              skills: el.name,
              description: el.description,
              recursos: recursoText,
              tags: tagText,
              action: '<v-icon dark>mdi-heart</v-icon>'
          })
        })        
      })
      console.log(this.data)
    },
    methods: {
      closeDialog(){
        this.dialogAddSkills = false
        this.$store.dispatch("setShowDialogSkill", false)
      },
      navigateToOverview() {
        router.push('home-business')
      },
      openAddSkillDialog() {
        this.dialogAddSkill = true;
      },
      openEditSkillDialog(skill) {
        console.log(skill.skills);
        this.dialogEditSkillForm.name = skill.skills
        this.dialogEditSkillForm.description = skill.description
        // this.dialogEditSkillForm.name = skill.skills
        this.dialogEditSkill = true;
      },
      showDialog(){
        this.dialogAddSkills = !this.dialogAddSkills
      }
    },
  }
</script>

<style scoped lang="scss">
.skills {
  margin-right: 15%;
  min-width: 500px;
}
.skills__back-section {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
}
.skills__back-section span {
  color: rgba(0, 0, 0, 0.54);
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