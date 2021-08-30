<template>
  <div>
    <v-row
      no-gutters
      align="start"
      align-content="center"
      justify="space-between"
    >
      <v-col cols="auto">
        <h1 class="textTitle">
          Tags
        </h1>
      </v-col>
    </v-row>
    <v-row class="ml-0">
      <molecule-tags-chips
        v-for="tag in tags"
        :key="tag"
        :tag="tag"
      />
    </v-row>
  </div>
</template>

<script>
import MoleculeTagsChips from '../molecules/MoleculeTagChips.vue'
export default {
  components: {
    MoleculeTagsChips
  },
  props:{
    tags: {
      type: Array,
      default: () => []
    }
  },

}
</script>

<style scoped>
.textTitle{
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;

}

</style>