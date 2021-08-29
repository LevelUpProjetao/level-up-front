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
    <div class="skills__back-section" v-on:click="navigateToOverview()">
      <v-icon> mdi-arrow-left </v-icon>
      <span>Voltar para Overview</span>
    </div>
    <div class="skills__horizontal-1">
      <div class="skills__header">
        <span>Skills: {{ companyName }}</span>
      </div>
      <div class="skills__button">
        <v-btn color="primary" elevation="2" v-on:click="openAddSkillDialog()"
          >Adicionar Skill</v-btn
        >
      </div>
    </div>
    <div class="skills__body-text">
      <span
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis
        neque incidunt porro perspiciatis repudiandae illo quibusdam facere
        quasi rem?</span
      >
    </div>
    <div class="skills__table">
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-icon v-on:click="openEditSkillDialog(item)">mdi-pencil </v-icon>
          <v-icon v-on:click="openDeleteDialog(item)" large
            >mdi-alpha-x
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
  import OrganismDialogAddSkill from '../components/organisms/OrganismDialogAddSkill.vue';
  import OrganismDialogEditSkill from '../components/organisms/OrganismDialogEditSkill.vue';
  import router from "../router";
  import api from "../api/axios"
  export default {
    components: { OrganismDialogAddSkill, OrganismDialogEditSkill },
    
    async created() {
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
    data () {
      return {
        dialogAddSkill: false,
        dialogEditSkill: false,
        dialogEditSkillForm: {
          name:'',
          level:'',
          description: '',
          resource: [{name:'',description:'',link:''}],
        },
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
        data: [],
      }
    },
    methods: {
      navigateToOverview() {
        router.push('home')
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