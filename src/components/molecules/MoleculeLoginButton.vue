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

  export default {
    methods: {
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
          this.$store.dispatch("setUser", obj);
          this.$store.dispatch("setLogged", true);
          router.push('/home')
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