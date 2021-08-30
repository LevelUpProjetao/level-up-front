<template>
  <div
    class="sizeInfoGeneral"
    style="background:white"
  >
    <p
      class="mb-0 ml-3 textInfoGeneral"
    >
      {{ number }}
    </p>
    <p
      class="textInfoGeneral ml-3"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props:{
    number: {
      type: Number,
      default: () => 20
    },
    text: {
      type: String,
      default: () => " Colaboradores"
    },
  },
  
  data: () => ({
    //
  }),
  methods:{
  }
};
</script>
<style scoped>

.textInfoGeneral{
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #263238;
}

.sizeInfoGeneral{
  width: 150px;
  height: 100px;

}

</style>
