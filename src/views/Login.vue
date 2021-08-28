<template>
  <div class="login_wrapper">
    <OrganismLoginContainer />
  </div>
</template>
<script>
import router from "../router";
import OrganismLoginContainer from '../components/organisms/OrganismLoginContainer';
export default {
    name: "About",
    components:{
      OrganismLoginContainer,
    },
};
</script>

<style scoped lang="scss">
  .login_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>