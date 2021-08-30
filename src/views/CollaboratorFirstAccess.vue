<template>
  <div class="first-access-card">
    <h1>
      Oi, {{ this.$store.state.user.name }}!
    </h1>
    <div class="first-access-subtitle">
      Vamos nos conhecer um pouquinho mais para te recomendarmos as skills que mais se encaixem com você.
    </div>
    <div>
      <v-text-field
        v-model="form.years_of_experience"
        label="Quantos anos de experiência na posição atual?"
        required
        outlined
      />
      <v-select
        v-model="form.achieved_tags"
        :items="currentHabilities"
        label="Habilidades que já possui"
        multiple
        chips
        required
        outlined
      />
      <v-select
        v-model="form.interested_tags"
        :items="desiredHabilities"
        label="Habilidades que gostaria de ter"
        :rules="[v => !!v || 'Item is required']"
        multiple
        chips
        required
        outlined
      />
      <v-checkbox
        v-model="form.has_interest_in_outside_tags"
        class="first-access-checkbox"
        label="Quero conhecer sobre assuntos além da minha posição"
      />
    </div>
    <div class="first-access-card-footer">
      <v-btn
        color="primary"
        @click="saveUserInformation()"
      >
        Iniciar minha experiência
      </v-btn>
    </div>
  </div>
</template>
<script>
import router from "../router"
import api from "../api/axios"

export default {
  name: "CollaboratorFirstAccess",
  data: () => ({
    form: {
      years_of_experience: null,
      achieved_tags: [],
      interested_tags: [],
      has_interest_in_outside_tags: false

    },
    currentHabilities: [],
    desiredHabilities: [],
  }),
  async created() {
    const tagsData = await api.get("/tags")
    this.currentHabilities = tagsData.data.map(tag=> tag.name)
    this.desiredHabilities = tagsData.data.map(tag=> tag.name)
  },
  methods: {
    async saveUserInformation(){
      const user = this.$store.state.user
      try {
        const userData = await api.post(`/users/${user.email}/info`,this.form)
        this.$store.dispatch("addAlert", {color: "success" , message: "Informações salvas com sucesso."})
        this.$store.dispatch("setUser", {...user, isFirstLogin: false})
        router.push("/home")

      } catch (error) {
        console.error(error);
        this.$store.dispatch("addAlert", {color: "error" , message: "Opss... Erro interno, tente novamente mais tarde."})
      }
      

    },
  }
};
</script>

<style scoped lang="scss">
.first-access-card {
  background-color: white;
  min-height: 605px;
  width: 690px;
  border-radius: 5px;
  margin: auto;
  padding: 40px 20px 40px 20px;
  margin-top: 30px;
}

.first-access-subtitle {
  margin: 25px 0;
}

.first-access-checkbox {
  margin: 0;
  padding: 0;
}

.first-access-card-footer {
  display: flex;
  margin-top: 50px;
}
</style>