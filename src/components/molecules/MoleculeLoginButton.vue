<template>
  <div>
    <v-btn @click="login()">
      <v-icon>
        mdi-google
      </v-icon>
      <span class="buttonText">
        Logar com Gmail
      </span>
    </v-btn>
  </div>
</template>

<script>
  import router from "../../router";
  import firebase from 'firebase';
  import api from "../../api/axios"

  export default {
    
    methods: {
      async checkEmail(object) {
        const user = {...object};
        try {
          const { data } = await api.get(`/users/${user.email}`);
          if (data.is_admin) {
            user.systemRole = 'company';
          } else {
            user.systemRole = 'collaborator';
            if (Array.isArray(data.interested_tags)) {
              user.isFirstLogin = false;
            } else {
              user.isFirstLogin = true;
            }
          }
          const userObject = {
            ...user,
            ...data
          }
          this.$store.dispatch("setUser", userObject);
          this.$store.dispatch("setLogged", true);
          router.push('/home-business');
        } catch (err) {
          this.$store.dispatch("addAlert", {color: "error" , message: "Sua conta não está liberada para acessar a plataforma."});
        }
      },
      login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          const obj = {
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            firebaseAccessToken: token,
            firebaseRefreshToken: user?.refreshToken,
          }
          this.checkEmail(obj);
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
      },
    }
  }

</script>

<style scope lang="scss">
  .buttonText {
    margin-left: 1rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.25px;
  }
</style>