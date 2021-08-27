<template>
  <div class="first-access-card">
    <h1>
      Oi, {{ collaboratorName }}!
    </h1>
    <div class="first-access-subtitle">
      Vamos nos conhecer um pouquinho mais para te recomendarmos as skills que mais se encaixem com você.
    </div>
    <div>
      <v-text-field
        v-model="years"
        label="Quantos anos de experiência na posição atual?"
        required
        outlined
      />
      <v-select
        v-model="habilities"
        :items="items"
        label="Habilidades que já possui"
        multiple
        chips
        required
        outlined
      />
      <v-select
        v-model="whishes"
        :items="items"
        label="Habilidades que gostaria de ter"
        :rules="[v => !!v || 'Item is required']"
        multiple
        chips
        required
        outlined
      />
      <v-checkbox
        v-model="checkbox"
        class="first-access-checkbox"
        label="Quero conhecer sobre assuntos além da minha posição"
      />
    </div>
    <div class="first-access-card-footer">
      <v-btn
        color="primary"
        text
        @click="dialog = false"
      >
        Fechar
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        @click="dialog = false"
      >
        Iniciar minha experiência
      </v-btn>
    </div>
  </div>
</template>
<script>
import router from "../router";

export default {
  name: "CollaboratorFirstAccess",
  data: () => ({
    collaboratorName: "Jorge",
    items: ["VueJS", "Objective C", "Python", "React"]
  }),
  methods: {
      login() {
          alert('Olhe o log e vc fez login')
          this.$store.dispatch("setLogged", true);
          // router.push("/home");
      },
      logout() {
          alert('Olhe o log e vc fez login')

          this.$store.dispatch("setLogged", false);
          // router.push("/home");
      }
  },
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